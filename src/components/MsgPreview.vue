<template>
  <div class="msg-preview">
    <h5 class="preview-title">{{ preview.title}}</h5>
    <p class="preview-blurb">{{ preview.blurb }}</p>
  </div>
</template>

<script>
export default {
  name: "MsgPreview",
  props: ["preview"]
}
</script>

<style lang="scss" scoped>
.msg-preview {
  border-bottom: 1px solid $grey-border;
  padding: 1rem;

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
</style>

