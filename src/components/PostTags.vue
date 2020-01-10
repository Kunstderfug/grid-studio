<template>
  <div class="post-tags">
    <g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span>
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-tags {
  padding: 1rem 0 1rem;

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor; //Todo: remove important;
    padding: 0.5em;
  }
}
</style>