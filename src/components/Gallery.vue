<template>
  <div>
    <Lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></Lightbox>

    <!-- Component name: 'vue-easy-lightbox' -->
    <!--
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
     -->
  </div>
</template>

<script>
import Lightbox from 'vue-easy-lightbox';

export default {
  components: {
    Lightbox
  },
  data() {
    return {
      imgs: '', // Img Url , string or Array
      visible: false,
      index: 0 // default
    };
  },
  methods: {
    showSingle() {
      this.imgs = 'http://via.placeholder.com/350x150';
      this.show();
    },
    showMultiple() {
      this.imgs = [
        'http://via.placeholder.com/350x150',
        'http://via.placeholder.com/350x150'
      ];
      this.index = 1; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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
