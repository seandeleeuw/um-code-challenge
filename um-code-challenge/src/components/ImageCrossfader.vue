<template>
  <div class="position: relative">
    <v-img v-for="image in imageList"
           v-bind:key="image.id"
           :src="image.image"
           :alt="image.alt"
           class="crossfade-image__image"
           :class="visibleImage === image.id && 'crossfade-image__image--visible'"
           contain
           max-width="100%" />
  </div>
</template>

<script>
export default {
  name: "ImageCrossfader",
  data() {
    return {
      imageList: this.images,
      visibleImage: this.visibleImageId
    }
  },
  props: {
    images: Array,
    visibleImageId: Number
  }
}
</script>

<style lang="less" scoped>
  .crossfade-image {
    &__image {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      height: 0;
      &--visible {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        height: 100%;
      }
    }
  }
</style>
