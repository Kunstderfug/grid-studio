<template>
  <Layout :show-logo="true">
    <div class="post-title">
      <h1 class="post-title__text">Samples</h1>
    </div>
    <div class="post content-box">
      <LazyYoutubeVideo src="https://www.youtube.com/embed/nssB7EZKCO0" />
      <p></p>
      <LazyYoutubeVideo src="https://www.youtube.com/embed/ZMFC_xtqHVY" />
      <p></p>
      <LazyYoutubeVideo src="https://www.youtube.com/embed/TJ9cuE86mmE" />
    </div>
  </Layout>
</template>

<script>
import "vue-lazy-youtube-video/dist/style.css";
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  name: "YoutubeVideo",
  components: {
    LazyYoutubeVideo
  }
};
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  padding-bottom: 2rem;
}

iframe {
  padding-top: 2rem;
  width: 100%;
  height: 100%;
}
</style>
