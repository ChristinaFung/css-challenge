<template>
  <div class="content-header">
    <h1 class="content-title">{{ title }}</h1>
    <div class="hamburger-container">
      <div class="hamburger-icon">
        <!-- TODO: Need hamburger icon -->
        <img src="http://placehold.it/30x30" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"]
}
</script>

<style lang="scss" scoped>
.content-header {
  background: $grey;
  border-bottom: 1px solid $grey-border;
  padding: 0 2rem;
  line-height: 1;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // -webkit-box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.25);
  // -moz-box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.25);
  box-shadow: 0px -15px 5px 15px rgba(0,0,0,0.25);
  position: relative;
  z-index: 1;

  .content-title {
    margin: 0;
    font-weight: 300;
    font-size: 2.2rem;
  }
}
</style>


