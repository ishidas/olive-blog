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

  </div>
</template>

<script>
  export default {
    data() {
      return {
        image: '/olive.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .olive-img {
    margin-bottom: 2rem;
  }
</style>
