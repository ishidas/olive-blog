<template>
  <v-app>
    <ToolBar />
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
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

