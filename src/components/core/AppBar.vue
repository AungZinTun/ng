<template>
  <v-app-bar
    id="core-app-bar"
    app
    color="transparent"
    elevate-on-scrolls
  >
    <v-container>
      <v-row>
        <div class="d-flex align-center">
          <v-img
            :src="require('@/assets/logo.png')"
            contain
            class="shrink mr-2"
            height="48"
            width="48"
          />

          <v-toolbar-title class="red--text headline font-italic">
            <span class="font-weight-bold">SCVG</span>
          </v-toolbar-title>
        </div>

        <v-spacer />

        <v-toolbar-items
          v-if="$vuetify.breakpoint.smAndUp"
          class="shrink"
        >
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="{
              name: link
            }"
            active-class="red--text"
            class="subtitle-1 ml-0 mr-0"
            exact
            min-width="128"
            text
          >
            {{ link }}
          </v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon
          v-else
          @click="setDrawer(true)"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapState(['links']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
