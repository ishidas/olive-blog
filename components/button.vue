<template>
  <v-layout right>
    <v-flex xs12 sm3 text-xs-center>
      <div>
        <v-btn depressed large color="primary" @on="listeners">
          <slot />
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {

    methods: {
      listeners() {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
