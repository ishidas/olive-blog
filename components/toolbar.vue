<template>
  <v-toolbar>
    <v-toolbar-side-icon />
    <v-toolbar-title>Olive the Dog</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/">
          Home
        </router-link>
      </v-btn>

      <v-btn flat>
        <router-link to="/blog">
          Blog
        </router-link>
      </v-btn>

      <v-btn flat>
        <router-link to="/about">
          About
        </router-link>
      </v-btn>

      <v-btn flat>
        <router-link to="/admin">
          Admin
        </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {


}
</script>
