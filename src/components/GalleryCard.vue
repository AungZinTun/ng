<template>
  <div>
    <v-img
      id="parallax-hero"
      dark
      height="800"
      :src="`${post.src}`"
    >
      <v-card
        class="d-flex mb-6"
        color="transparent"
        flat
        height="800"
        tile
      >
        <!-- <v-card
          :key="n"
          class="pa-2"
          :class="`display-3 align-self-end red--text transparent`"
          outlined
          tile
        >
          end
        </v-card> -->
        <v-row
          class="align-self-end display-1"
          align="end"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <v-card
              class="justify-center primary--text"
              color="rgb(250, 100, 100, 0.4)"
            >
              <h1
                class="display-1 font-weight-bold ml-10 mr-10 pt-5 "
                dense
                v-text="post.message"
              />
              <div class="px-2 pb-4">
                <v-card-text class="">
                  <v-chip prepend />
                  <div class="text-center display-1">
                    <v-progress-circular
                      :rotate="360"
                      :size="90"
                      :width="4"
                      :value="value"
                      color="teal"
                    >
                      {{ value }}
                    </v-progress-circular>
                    <div
                      class="caption"
                      small
                      v-text="`- ${post.indicator} `"
                    />
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-img>
  </div>
</template>

<script>

  export default {
    name: 'BlogCard',

    props: {
      post: {
        type: Object,
        default: () => ({
          category: undefined,
          date: undefined,
          blurb: undefined,
          src: undefined,
          title: undefined,
        }),
      },
    },
    data () {
      return {
        interval: {},
        value: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 1000) {
          return (this.value = 0)
        }
        this.value += 1
      }, 10)
    },
    methods: {
      fbchat () {
        return 1
      },
    },
  }
</script>
<style scoped>
@media only screen and (max-width : 800px) {
  .title {
    background-color: red;
    color: red;
  }
  .parallax img {
    max-height: 150%; /* or a little bit higher */
  }
}

@media only screen and (min-width: 993px) {
  .parallax img {
    max-height: 300%; /* or higher percentages. It's up to your taste */
  }
}

</style>
