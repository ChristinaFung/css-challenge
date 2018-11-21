<template>
  <div class="input-container">
    <div class="msg-input" contenteditable="true">Type a message...</div>
  </div>
</template>

<script>
export default {
  name: "MessageInput"
}
</script>

<style lang="scss" scoped>
.input-container {
  border-top: 2px solid $grey-msg-accent;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 8rem;
  padding: 1.8rem;

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


