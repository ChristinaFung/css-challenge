<template>
  <div id="app">
    <!-- Sidebar component -->
    <Sidebar :users="content.users" :activeUser="state.activeUser" @set-user="setUser"/>

    <div class="content-container">
      <!-- Header component -->
      <Header :title="content.header.title"/>

      <div class="msg-window-container" v-for="(user, index) of content.users" :key="index" v-show="state.activeUser === user.id">
        <div class="previews-container">
          <!-- MessagePreview component -->
          <MsgPreview v-for="(preview, index) of user.previews" :key="index" :preview="preview"/>
        </div>
        <!-- MessageWindow component -->
        <div class="msg-container">
          <!-- Message component -->
          <div class="message">
            <div class="msg-header">
              <h3 class="msg-title">{{ user.message.title }}</h3>
              <h4 class="msg-subtitle">{{ user.message.subtitle }}</h4>
            </div>
            <p class="top-paragraph">{{ user.message.topParagraph }}</p>

            <div class="msg-img-container">
              <div class="image-placeholder"></div>
              <p class="caption">{{ user.message.caption }}</p>
            </div>

            <p class="bottom-paragraph">{{ user.message.bottomParagraph }}</p>
          </div>
          <div class="input-container">
            <div class="msg-input" contenteditable="true">Type a message...</div>
          </div>
        </div>
      </div>

    </div>
    <!-- HamburgerMenu component? -->
  </div>
</template>

<script>
import { store } from '@/store.js'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import MsgPreview from '@/components/MsgPreview.vue'
import content from '@/data/content.json'

export default {
  name: 'app',
  components: {
    Sidebar,
    Header,
    MsgPreview
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

  .message {
    .msg-header {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      position: relative;

      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        height: 2px;
        background: $grey-msg-accent;
        width: 85%;
        

      }
    }
    .msg-title {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }

    .msg-subtitle {
      font-style: italic;
      font-size: 1.4rem;
      font-weight: 400;
    }

    .top-paragraph:first-letter {
      // thanks https://css-tricks.com/snippets/css/drop-caps/
      float: left;
      font-size: 40px;
      line-height: 25px;
      padding: 5px 5px 0 0;
    }

    .msg-img-container {
      text-align: center;
      margin: 2.5rem 0;

      .image-placeholder {
        background: $grey-asset;
        margin: 0 auto;
        width: 50rem;
        height: 20rem
      }
    }

    .caption {
      font-size: 1.2rem;
      font-style: italic;
      margin-top: 0.5rem;
      line-height: 1;
    }

  }

  .input-container {
    border-top: 2px solid $grey-msg-accent;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 8rem;
    padding: 1.8rem;
  }

  .msg-input {
    border: 2px solid $grey-msg-accent;
    border-radius: 0.5rem;
    background: none;
    color: $grey-asset;
    padding: 1rem;
    font-size: 1.8rem;

  }
  

}
</style>
