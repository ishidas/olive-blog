<template>
  <div>
    <div>
      <v-img
        :src="portrait"
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
      portrait: '/family.jpg'
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>
