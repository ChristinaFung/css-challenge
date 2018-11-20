<template>
  <div id="app">
    <!-- Sidebar component -->
    <Sidebar :users="content.users" :activeUser="state.activeUser" @set-user="setUser"/>

    <div class="content-container">
      <!-- Header component -->
      <div class="content-header">
        <h1 class="content-title">{{ content.header.title }}</h1>
        <div class="hamburger-container">
          <div class="hamburger-icon">
            <!-- TODO: Need hamburger icon -->
            <img src="http://placehold.it/30x30" alt="">
          </div>
        </div>
      </div>
      <div class="previews-container" v-for="(user, index) of content.users" :key="index" v-if="state.activeUser === user.id">
        <!-- MessagePreview component -->
        <div class="msg-preview" v-for="(preview, index) of user.messages.previews" :key="index">
          <h5 class="preview-title">{{ preview.title}}</h5>
          <p class="preview-blurb">{{ preview.blurb }}</p>
        </div>
      </div>
    
    
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
  width: calc(100% - 6rem);
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
  // -webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.4);
  // -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.4);
  // box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.4);

  .content-title {
    margin: 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
}

.previews-container {
  width: 33%;
  background: $grey-light;
  border-right: 1px solid $grey-border;
  height: calc(100% - 6rem);

  .msg-preview {
    border-bottom: 1px solid $grey-border;
    padding: 1rem;
          // height: 9rem;

    .preview-title {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .preview-blurb {
      // thanks https://www.consolelog.io/multiple-line-ellipsis-css-effect/ :)
      display: block;
      display: -webkit-box;
      max-width: 100%;
      height: 56px;
      margin: 0 auto;
      font-size: 1.2rem;
      line-height: 1.2;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
