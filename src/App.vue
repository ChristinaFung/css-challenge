<template>
  <div id="app">
    <!-- Sidebar component -->
    <Sidebar :users="content.users" :activeUser="state.activeUser" @set-user="setUser"/>

    <div class="content-container">
      <div class="content-header">
        <h1 class="content-title">{{ content.header.title }}</h1>
        <div class="hamburger-container">
          <div class="hamburger-icon">
            <!-- TODO: Need hamburger icon -->
            <img src="http://placehold.it/30x30" alt="">
          </div>
        </div>
      </div>
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
  min-height: 768px;
  display: flex;
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

.content-container {
  width: calc(100% - 6rem)
}

.content-header {
  background: $grey;
  border-bottom: 1px solid $grey-border;
  padding: 0 2rem;
  line-height: 1;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content-title {
    margin: 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
}
</style>
