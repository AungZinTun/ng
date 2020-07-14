<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-row>
      <v-col>
        <chat />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    components: {
      Chat: () => import('./Chat.vue'),
    },
  }
</script>

<style>

</style>
