<template>
  <v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>
        <v-filter :tabs="tabs" />

        <v-row>
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <post-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'Blog',

    components: {
      PostCard: () => import('./components/PostCard'),
      VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      posts: [
        { title: 'Office Driver', category: 'Jobs', blurb: 'Office Driver ', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/job-driver.jpg?alt=media&token=d6322660-0b51-4eeb-9e05-8696417e725f' },
        { title: 'Supervisor', category: 'Jobs', blurb: 'Supervisor', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/job-supervisor.jpg?alt=media&token=8510c020-17bf-4c19-8236-af7d56d69dab' },
      ],
      tabs: [
        'All',
        'Nature',
        'Cities',
        'Branding',
        'Design',
      ],
    }),
  }
</script>
