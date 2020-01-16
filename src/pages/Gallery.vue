<template>
  <Layout :show-logo="true">
    <div class="post-title">
      <h1 class="post-title__text">Gallery</h1>
    </div>
    <div class="post content-box">
      <div class="gallery">
        <picture
          class="image"
          v-for="(src, index) in imgs"
          :key="index"
          @click="() => showImg(index)"
        >
          <a :href="src">
            <g-image :src="src" :visible="visible" :imgs="imgs" @hide="handleHide" />
          </a>
          <!-- <a :href="src" target="_blank" rel="noopener norefferer"></a> -->
        </picture>
      </div>
      <!-- <button @click="showSingle">Show single picture.</button>
      <button @click="showMultiple">Show a group of pictures.</button>-->
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://kunstderfug.github.io/Images/studio/room.jpg",
        // "https://kunstderfug.github.io/Images/studio/piano1.jpg",
        "https://kunstderfug.github.io/Images/studio/piano2.jpg",
        "https://kunstderfug.github.io/Images/studio/mics-1.jpg",
        "https://kunstderfug.github.io/Images/studio/bmpcc4k.jpg",
        "https://kunstderfug.github.io/Images/studio/mics-2.jpg",
        "https://kunstderfug.github.io/Images/studio/piano3.jpg",
        // "https://kunstderfug.github.io/Images/studio/piano4.jpg",
        "https://kunstderfug.github.io/Images/studio/cards.jpg",
        // "https://kunstderfug.github.io/Images/studio/minion.jpg",
        // "https://kunstderfug.github.io/Images/studio/pilot.jpg",
        "https://kunstderfug.github.io/Images/studio/stuff.jpg"
      ], // Img Url , string or Array
      visible: false,
      index: 0 // default
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
picture {
  display: inline;
  object-fit: cover;
  img {
    margin-bottom: 0;
    background-size: cover;
  }
}

.showImage {
  max-height: 80vh;
  max-width: 80vw;
}
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
  display: grid;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 500px) {
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
  }
}

.image {
  &:hover {
    cursor: pointer;
  }
  a:hover {
    border-bottom: none;
  }
  img {
    width: 100%;
    background-size: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(2);
    }
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 768px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 375px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
