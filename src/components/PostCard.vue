<template>
  <div
    class="post-card content-box"
    :class="{ 'post-card--has-poster': post.poster }"
  >
    <div class="post-card__header">
      <g-image
        alt="Cover image"
        v-if="post.cover_image"
        class="post-card__image"
        :src="post.cover_image"
      />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta';
import PostTags from '~/components/PostTags';

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post']
};
</script>

<style lang="scss">
.post-card {
  margin-bottom: 2rem;
  position: relative;
  border-bottom: 1px solid;

  &__header {
    // margin-left: calc(var(--space) * -1);
    // margin-right: calc(var(--space) * -1);
    // margin-bottom: calc(var(--space) / 2);
    // margin-top: calc(var(--space) * -1);
    overflow: hidden;

    &:empty {
      display: block;
      margin-top: -2rem;
    }
  }

  &__image {
    max-width: 100%;
    &:not:first-child {
      padding-top: 2rem;
    }
  }

  &__title {
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-top: -1rem;
    margin-left: 0;
    color: var(--link-color);
  }

  &:hover {
    // transform: translateY(-5px);
    // box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }
  &__content {
    padding: 1rem;
  }

  &__tags {
    z-index: 1;
    position: relative;
    margin-bottom: 1rem;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
