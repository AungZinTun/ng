<template>
  <div>
    <v-container
      class="secondary ma-0 pa-0 px-0"
      fluid
      tag="section"
    >
      <v-row
        class="secondary ml-0"
        no-gutters
      >
        <v-col
          v-for="(post, i) in pictures"
          :key="i"
          cols="12"
        >
          <post-card :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  // Utilities
  import {
    get,
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'Gallery',

    components: {
      PostCard: () => import('@/components/GalleryCard'),
    },

    data: () => ({

    }),

    computed: {
      ...sync('photographs', [
        'picture',
      ]),
      pictures: get('photographs/pictures'),
    },
  }
</script>

<style lang="sass">
  .gallery
    // max-width: 1280px
</style>
