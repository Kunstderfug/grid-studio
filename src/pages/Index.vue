<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
    <div class="links">
      <g-link to="/gallery">Gallery</g-link>
      <g-link to="/samples">Samples</g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost( filter: { published: { eq: true }}, sort: {order: ASC}) {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Welcome"
  }
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 768px) {
  .posts {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .posts {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  a {
    font-size: 2rem;
  }
  // background: var(--link-color);
}
</style>
