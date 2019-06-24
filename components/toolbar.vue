<template>
  <v-toolbar v-resize="onResize">
    <div
      v-if="showIcon"
      class="text-xs-center"
    >
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon
            v-on="on"
          />
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in navItems"
            :key="index"
          >
            <v-list-tile-title>
              <nuxt-link :to="checkHomeRoute(item)">
                {{ item }}
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>

    <v-toolbar-title>Olive the Dog</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="( item, index ) in navItems"
        :key="index"
        flat
      >
        <nuxt-link :to="checkHomeRoute(item)">
          {{ item }}
        </nuxt-link>
      </v-btn>
    </v-toolbar-items>
    <Menu />
  </v-toolbar>
</template>

<script>

export default {
  data() {
    return {
      showMenu: true,
      showIcon: false,
      windowSize: {
        x: 0,
        y: 0
      },
      navItems: ['home','blog','about','admin'],
    }
  },
  computed: {

  },
  methods: {
    menuAction() {
      this.showMenu = !this.showMenu
      this.$emit('on')
      console.log('showMenu ', this.showMenu)
    },
    onResize() {
      this.windowSize = Object.assign({} ,this.windowSize, { x: window.innerWidth , y: window.innerHeight })
    if (this.windowSize.x <= 959) {
        this.showIcon = true
      } else {
        this.showIcon = false
      }
    },
    checkHomeRoute(item) {
      return (item === 'home') ? '/' : item
    }
  }
}
</script>
