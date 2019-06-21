<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, index) in items"
      :key="index"
      small
    >
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-text>{{ item.content }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { firebaseDB } from '~/plugins/firebase';


export default {
  components: {

  },
  data() {
    return {
      items: ['content']
    }
  },
  async mounted() {
    const temp = []
    await firebaseDB.collection('blog').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        temp.push(doc.data())
      })
    });
    this.items = temp
      console.log('this.items', this.items)


  },

}
</script>
