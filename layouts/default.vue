<template>
  <v-app>
    <ToolBar />
    <v-container text-xs-center align-content-space-around>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex xs12>
          <nuxt />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

import ToolBar from '@/components/toolbar'

export default {
  components: {
    ToolBar,
  },
}
</script>
<style scoped>
  /* .home {
    margin-top: 5%;
  } */
</style>

