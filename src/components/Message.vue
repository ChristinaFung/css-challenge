<template>
  <div class="message">
    <div class="msg-header">
      <h3 class="msg-title">{{ message.title }}</h3>
      <h4 class="msg-subtitle">{{ message.subtitle }}</h4>
    </div>
    <p class="top-paragraph">{{ message.topParagraph }}</p>

    <MessageImage :caption="message.caption"/>

    <p class="bottom-paragraph">{{ message.bottomParagraph }}</p>
  </div>
</template>

<script>
import MessageImage from "@/components/MessageImage.vue"

export default {
  name: "Message",
  components: {
    MessageImage
  },  
  props: ["message"]
}
</script>

<style lang="scss" scoped>
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
}
</style>


