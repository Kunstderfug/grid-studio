<template>
  <div class="slides">
    <div v-for="slide in slides">
      <a :href="slide.src" rel="noopener norefferer">
        <g-image :src="slide.src" fit="outside" />
      </a>
    </div>
  </div>
</template>

<script>
import Slide from "./Slide.vue";

export default {
  name: "Slides",
  data() {
    return {
      slides: [
        { src: "/studio/room.jpg" },
        { src: "/studio/piano2.jpg" },
        { src: "/studio/mics-1.jpg" },
        { src: "/studio/bmpcc4k.jpg" },
        { src: "/studio/mics-2.jpg" },
        { src: "/studio/piano3.jpg" },
        { src: "/studio/cards.jpg" },
        { src: "/studio/stuff.jpg" }
      ]
    };
  },
  components: {
    Slide
  },
  methods: {
    showImage() {
      this.slide.src = slide.src;
    }
  }
};
</script>

<style lang="scss">
.slides {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}

@media screen and (min-width: 376px) {
  .slides {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 768px) {
  .slides {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

img {
  max-width: 100%;
}

a {
  &:hover {
    border-bottom: none;
  }
  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>