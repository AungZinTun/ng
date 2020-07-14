<template>
  <v-card
    flat
    class="mt-0 px-2 ml-3 mr-3"
  >
    <v-card-text
      style="height: 350px;"
      class="grey"
    >
      <v-row>
        <!-- remote  -->
        <v-col
          cols="12"
        >
          <v-row
            v-show="connected"
            no-gutters
            class="justify-center mb-0"
          >
            <v-col :cols="`${12}`">
              <span
                ref="remoteVideoBox"
                class="video-box remote-video-box"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- local  -->
      </v-row>
    </v-card-text>
    <v-card-text style="height: 100px; position: relative">
      <v-row
        class="mb-0 align-start "
      >
        <v-col
          cols="4"
        >
          <span
            ref="localVideoBox"
            class="video-box local-video-box "
          />
        </v-col>
        <v-col>
          <v-btn @click="dialog=true">
            <v-icon>mdi-account-plus</v-icon> <span>invite</span>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <v-text-field
                    v-model="route"
                    label="Copy URL to meeting room"
                    prepend-icon="mdi-copy"
                    @click="copy"
                  />
                  <p
                    v-show="copied"
                    class="caption green accent-1"
                  >
                    <v-icon>mdi-clipboard</v-icon>
                    copied to clipboard
                  </p>
                  <v-spacer />
                  <v-menu
                    bottom
                    left
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="dialog = false, copied= false"
                      >
                        <v-icon color="red">
                          mdi-close
                        </v-icon>
                      </v-btn>
                    </template>
                  </v-menu>
                </v-card-title>
              </v-card>
            </v-dialog>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          v-show="!connected"
          dark
          absolute
          bottom
          left
          fab
          class="green ml-9"
          :loading="loading"
          @click="openOrJoinRoom"
        >
          <v-icon>mdi-video</v-icon>
        </v-btn>
        <v-btn
          v-show="connected"
          dark
          absolute
          bottom
          right
          fab
          class="red mr-9"
          @click="leave"
        >
          <v-icon>
            mdi-video-off
          </v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import config from '@/config.js'
  export default {
    data () {
      return {
        socketurl: '',
        turnServerUsername: '',
        turnServerPassword: '',
        connection: null,
        connected: false,
        roomId: 'SCVG-MEETING-ROOM',
        peers: 1,
        mounted: false,
        loading: false,
        dialog: false,
        copied: false,
      }
    },
    computed: {
      route () { return `https://scvg-mm.web.app/#${this.$route.path}` },
      remoteCount () {
        if (this.mounted) {
          if (this.$refs.remoteVideoBox) {
            return this.$refs.remoteVideoBox.childElementCount
          }
        }
        return 0
      },
    },

    mounted () {
      this.init()
      this.openOrJoinRoom()
      this.mounted = true
    },
    beforeDestroy () {
      this.loading = true
      this.leave()
    },

    methods: {
      copy () {
        navigator.clipboard.writeText(this.route)
        this.copied = true
      },
      getQueryParam (name) {
        const paramsString = window.location.href.split('?')
        const searchParams = new URLSearchParams(paramsString[1])
        return searchParams.has(name) ? searchParams.get(name) : false
      },

      reloadWindow () {
        const url = window.location
        window.location.href = `${url.origin}${url.pathname}?roomid=${this.roomId}&start=0`
      },
      leave () {
        // eslint-disable-next-line no-undef
        const connection = (this.connection)
        console.log('leave')
        connection.getAllParticipants().forEach(function (pid) {
          connection.disconnectWith(pid)
        })

        // stop all local cameras
        connection.attachStreams.forEach(function (localStream) {
          localStream.stop()
        })

        // close socket.io connection
        connection.closeSocket()
        this.connected = false
      },

      init () {
        const self = this
        console.log('refs', this.$refs)
        // console.log('getQueryParam('roomid'):', this.roomId)

        const supports = navigator.mediaDevices.getSupportedConstraints()
        var constraints = {}
        if (supports.width && supports.height) {
          constraints = {
            width: config.width || 460,
            height: config.height || 460,
          }
        }
        console.log('constraints', constraints)

        // eslint-disable-next-line no-undef
        const connection = (this.connection = new RTCMultiConnection())

        // connection.applyConstraints({
        //   video: constraints,
        // })

        this.socketURL = this.getQueryParam('socketurl')
        connection.socketURL = this.socketURL || config.socketURL
        // connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/'
        // connection.socketURL = 'https://rulokoba.me:9001/'
        console.log('connection.socketURL', connection.socketURL)
        connection.session = {
          audio: false,
          video: true,
        }

        // https://www.rtcmulticonnection.org/docs/iceServers/
        connection.iceServers = []
        const stunServers = config.stunServers || []
        for (const server of stunServers) {
          console.log('stunServer', server)
          connection.iceServers.push({
            urls: server,
          })
        }

        this.turnServerUsername = this.getQueryParam('turnuser')
        this.turnServerPassword = this.getQueryParam('turnpass')
        console.log('turnServerConfig', {
          urls: config.turnServerURL,
          username: this.turnServerUsername || config.turnServerUsername,
          credential: this.turnServerPassword || config.turnServerPassword,
        })
        connection.iceServers.push({
          urls: config.turnServerURL,
          username: this.turnServerUsername || config.turnServerUsername,
          credential: this.turnServerPassword || config.turnServerPassword,
        })

        connection.onstream = function (event) {
          console.log('onstream')
          self.counter++
          const video = event.mediaElement

          if (event.type === 'local') {
            console.log('Video: local')
            video.className += ' local'
            self.$refs.localVideoBox.appendChild(video)
          }

          if (event.type === 'remote') {
            console.log('Video: remote')
            video.className += ' remote'
            self.$refs.remoteVideoBox.appendChild(video)
          }
        // self.$refs['videoBox'].appendChild(video)
        }

        connection.onleave = (event) => {
          console.log('onleave')
          if (self.counter > 0) {
            self.counter--
          }
          this.peers = this.peers - 1
          console.log(this.peers)
        }
        this.peers = this.connection.peers['remote-user-id']
        console.log(`Total peers ${this.peers}`)
        this.roomId = this.roomId || connection.token()
        this.loading = false
      },

      openOrJoinRoom () {
        this.loading = true
        this.init()
        this.connected = true
        this.connection.openOrJoin(this.roomId)
        this.loading = false
      },
    },
  }
</script>

<style>
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: ". . .";
}

.video-box {
  display: flex;
}
.video-box video {
  width: 50%;
}
.video-box video.local {
  background-color: rgba(0, 0, 0, 0.1);
}
.video-box video.remote {
  background-color: rgba(0, 0, 0, 0.1);
}
@media (min-width: 768px) {
  .video-box {
    flex-direction: row;
  }
  .video-box video {
    width: 100%;
  }
}
</style>
