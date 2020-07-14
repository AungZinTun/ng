<template>

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
    data: () => ({
      dialog: false,
    }),
  }
</script>
