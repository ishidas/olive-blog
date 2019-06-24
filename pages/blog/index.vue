<template>
  <div>
    <div>
      <v-img
        :src="playpic"
        class=""
        aspect-ratio="2"
        contain
      />
    </div>
    <Timeline
      class="home"
    />
  </div>
</template>

<script>
import Timeline from '@/components/timeline'
  export default {
    components: {
      Timeline
    },
    data() {
    return {
      playpic: '/olive-play.jpg'
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>
