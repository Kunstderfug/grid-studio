<template>
  <Layout :show-logo="true">
    <div class="post-title">
      <h1 class="post-title__text">Gallery</h1>
    </div>

    <div class="post content-box">
      <h2>the page is under construction</h2>
      <!-- <gallery :images="images" :index="index" @close="index = null"></gallery> -->
      <!-- <div class="gallery">
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '100%',
            height: '15vh'
          }"
        ></div
      ></div> -->
    </div>
  </Layout>
</template>

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
  }
}

.gallery {
  max-width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 376px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
}

@media screen and (min-width: 768px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}

.image {
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    background-size: cover;
  }
}
</style>
