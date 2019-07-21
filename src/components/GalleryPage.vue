<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="item">
        <div class="item-icon">
          <i class="instagram icon"></i>
        </div>
        <div class="content">
          <a href="https://www.instagram.com/tsentrturizmapskov/" data-rel="external" target="_blank" rel="noopener">Instagram Центра</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GalleryPage",
    data() {
      return {
        header: 'Галерея',
      }
    },
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .item {
    display: flex;
    align-items: baseline;
  }
</style>
