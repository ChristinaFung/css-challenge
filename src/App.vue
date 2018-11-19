<template>
  <div id="app">
    <!-- Sidebar component -->
    <Sidebar :users="content.users" :activeUser="state.activeUser" @set-user="setUser"/>

    <div class="content-container">
    <!-- Header component -->
    <!-- MessagePreview component -->
    <!-- MessageWindow component -->
    <!-- HamburgerMenu component? -->
    </div>

  </div>
</template>

<script>
import { store } from '@/store.js'
import Sidebar from '@/components/Sidebar.vue'
import content from '@/data/content.json'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  data: function() {
    return {
      content: content,
      state: store.state
    }
  },
  methods: {
    setUser: function(userId) {
      this.state.activeUser = userId;
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/setup.scss";

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1024px;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  overflow: auto;
  height: 100vh;
}
</style>
