<template>
  <Gallery>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>
    </div>

    <div class="post content-box">
      <Gallery />
    </div>
  </Gallery>
</template>

<script>
import Gallery from '~/components/GalleryComp.vue';

export default {
  components: {
    Gallery
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    description
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  background: var(--bg-color);
  &__header {
    width: 100%;
    margin: 0 auto;
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
      margin-bottom: 1rem;
      padding: 0;
    }

    // p:first-of-type {
    //   // font-size: 1.2em;
    //   color: var(--title-color);
    // }

    img {
      width: 100%;
      margin: 0 auto;
      display: block;
      max-width: none;
    }
  }

  h2,
  h4 {
    padding: 1rem 1rem 0 1rem;
  }

  h3 {
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}

.grid-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

@media only screen and (min-width: 1024px) {
  .hidden {
    display: none;
  }
}
</style>
