<template>
  <div class="slide">Slide with src of {{ test }}</div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      test: "This is the test"
    };
  },
  props: {
    slide: ["slide"]
  }
};
</script>

<style lang="scss">
</style>