<template>
  <div>
    <div>
      <v-img
        :src="image"
        class="olive-img"
        aspect-ratio="3.9"
        contain
      />
    </div>
    <h1 class="px-0 font-weight-bold">Olive the Dog</h1>
    <h1 class="px-0 font-weight-light">Story of Incompetent Parents</h1>
    <v-layout row>
      <v-flex xs6>
        <div>
          <v-img
            :src="pawleft"
            class="olive-img"
            aspect-ratio="5"
            contain
          />
        </div>
      </v-flex>
      <v-flex xs6>
        <div>
          <v-img
            :src="paw"
            class="olive-img"
            aspect-ratio="5"
            contain
          />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image: '/olive.png',
        paw: '/paw.png',
        pawleft: '/pawleft.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .olive-img {
    margin-bottom: 2rem;
  }
</style>
