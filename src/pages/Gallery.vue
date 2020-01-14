<template>
  <Layout :show-logo="true">
    <div class="post-title">
      <h1 class="post-title__text">Gallery</h1>
    </div>

    <div class="post content-box">
      <!-- <gallery :images="images" :index="index" @close="index = null"></gallery> -->
      <div class="gallery">
        <g-image src="../assets/studio/studio-steinway.jpg" width="300px" />
        <a href="assets/img/studio-steinway-1.jpg"
          ><img src="../assets/studio/studio-steinway-1.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-2.jpg"
          ><img src="../assets/studio/studio-2.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-3.jpg"
          ><img src="../assets/studio/studio-3.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-4.jpg"
          ><img src="../assets/studio/studio-4.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-5.jpg"
          ><img src="../assets/studio/studio-5.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-6.jpg"
          ><img src="../assets/studio/studio-6.jpg" width="300px"
        /></a>
        <a href="assets/img/studio-7.jpg"
          ><img src="../assets/studio/studio-7.jpg" width="300px"
        /></a>
      </div>
      <div class="gallery">
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
      ></div>
    </div>
  </Layout>
</template>

//
<script>
// import VueGallery from 'vue-gallery';

// export default {
//   name: 'Gallery',
//   data: function() {
//     return {
//       images: [
//         'assets/img/studio-2.jpg',
//         'assets/img/studio-steinway.jpg',
//         'assets/img/studio-steinway-1.jpg',
//         'assets/img/studio-3.jpg',
//         'assets/img/studio-4.jpg',
//         'assets/img/studio-5.jpg',
//         'assets/img/studio-6.jpg'
//       ],
//       index: null
//     };
//   },

//   components: {
//     gallery: VueGallery
//   }
// };
//
</script>

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

.image {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  &:hover {
    cursor: pointer;
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
</style>
