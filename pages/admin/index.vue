<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="font-weight-bold">
          Let Your Idea Flow..
        </h1>
      </v-flex>
    </v-layout>
    <v-form>
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field
            label="Title"
            placeholder="Placeholder"
            box
          />
        </v-flex>
        <Datepicker />
      </v-layout>
      <v-layout row>
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
    </v-form>

    <Button>Submit</Button>
  </v-container>
</template>

<script>
import Button from '@/components/button'
import Datepicker from '@/components/datepicker'

export default {
  components: {
    Button,
    Datepicker
  },
}
</script>

<style lang="scss" scoped>
  .blog-field {
    height: 10rem;
  }
</style>
