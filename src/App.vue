<template>
  <div id="app">
    <!-- Sidebar -->
    <Sidebar :users="content.users" :activeUser="state.activeUser" @set-user="setUser"/>

    <div class="content-container">
      <!-- Header -->
      <Header :title="content.header.title"/>

      <div class="msg-window-container" v-for="(user, index) of content.users" :key="index" v-show="state.activeUser === user.id">
        <div class="previews-container">
          <!-- MessagePreview -->
          <MessagePreview v-for="(preview, index) of user.previews" :key="index" :preview="preview"/>
        </div>
        <!-- MessageWindow -->
        <div class="msg-container">
          <!-- Message -->
          <Message :message="user.message"/>
          <!-- MessageInput -->
          <MessageInput/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js"
import Sidebar from "@/components/Sidebar.vue"
import Header from "@/components/Header.vue"
import MessagePreview from "@/components/MessagePreview.vue"
import Message from "@/components/Message.vue"
import MessageInput from "@/components/MessageInput.vue"
import content from "@/data/content.json"

export default {
  name: "app",
  components: {
    Sidebar,
    Header,
    MessagePreview,
    Message,
    MessageInput
  },
  data: function() {
    return {
      state: store.state,
      content: content
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
  height: 800px;
  display: flex;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  overflow: auto;
  height: 100vh;
}

.content-container {
  width: calc(100% - 6rem);
}

.previews-container {
  width: 33%;
  height: 100%;
  overflow: auto;
  background: $grey-light;
  border-right: 1px solid $grey-border;
}

.msg-window-container {
  display: flex;
  height: calc(100% - 6rem);
}

.msg-container {
  width: 67%;
  background: $grey-lighter;
  padding: 2.5rem;
  position: relative;
  min-height: 100%;
  padding-bottom: 8rem;
}
</style>
