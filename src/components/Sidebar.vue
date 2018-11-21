<template>
  <div class="sidebar">
      <div class="logo-container">
        <img class="logo" src="@/assets/logo.png" alt="">
      </div>
      <div class="icons-bar">
        <ul class="icons-list">
          <li v-for="(user, index) of users" :key="index">
            <div class="user-icon" :class="activeUser === user.id ? 'active' : ''" @click="$emit('set-user', user.id)"></div>
            <p class="cmd-label"><span class="cmd-symbol">⌘</span> {{ index+1 }}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["users", "activeUser"]
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 6rem;
  position: relative;
  z-index: 2;

  .logo-container {
    background: $pink;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 60%;
    display: inline-block;

    img {
      width: 100%;
    }
  }

  .icons-bar {
    background: $grey-dark;
    width: 100%;
    height: calc(100% - 6rem);
    padding: 1rem 0;
    color: #fff;
  }

  .icons-list {
    list-style-type: none;
    padding: 0;
    margin:0;


    li {
      padding: 0 1rem;
      margin-bottom: 1.5rem;
    }
  }

  .user-icon {
    width: 4rem;
    height: 4rem;
    background: $grey-light;
    border-radius: 0.5rem;
    position: relative;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);

    &.active:before {
      position: absolute;
      content: '';
      background: $pink;
      height: 3px;
      width: 3px;
      top: 50%;
      transform: translateY(-50%);
      left: -1.2rem;
      border-radius: 50%;
      -webkit-box-shadow: 0px 0px 7px 3px rgba(219,10,91,1);
      -moz-box-shadow: 0px 0px 7px 3px rgba(219,10,91,1);
      box-shadow: 0px 0px 7px 3px rgba(219,10,91,1);
    }
  }

  .cmd-symbol {
    font-size: 1.2rem;
  }

  .cmd-label {
    text-align: center;
    margin: 0.5rem 0 0 0;
    font-size: 1.4rem;
  }
}
</style>

