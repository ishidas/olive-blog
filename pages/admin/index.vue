<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="font-weight-bold">
          Let Your Idea Flow..
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          solo
          rows="30"
          name="input-7-4"
          label="Solo textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        />
      </v-flex>
    </v-layout>
    <Button>Submit</Button>
  </v-container>
</template>

<script>
import Button from '@/components/button'

export default {
  components: {
    Button,
  },
}
</script>

<style lang="scss" scoped>
  .blog-field {
    height: 10rem;
  }
</style>
