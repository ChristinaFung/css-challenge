<template>
  <div class="msg-img-container">
    <div class="image-placeholder"></div>
    <p class="caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: "MessageImage",
  props: ["caption"]
}
</script>

<style lang="scss" scoped>
.msg-img-container {
  text-align: center;
  margin: 2.5rem 0;

  .image-placeholder {
    background: $grey-asset;
    margin: 0 auto;
    width: 50rem;
    height: 20rem
  }

  .caption {
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 0.5rem;
    line-height: 1;
  }
}
</style>


