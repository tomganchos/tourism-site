<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <div><h2>Документы:</h2></div>

        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1pNPqcyPdqjzaY4Xri6vA2bKLYMUzHgv6/view?usp=sharing" target="_blank" rel="noopener">Туристские маршруты по Псковской области</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/18A7WVtSrGjqJaT3_tldYViqaUn6E0OYB/view?usp=sharing" target="_blank" rel="noopener">Список рекомендуемых маршрутов</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TouristRoutesPage",
      data() {
        return {
          header: 'Туристические маршруты',
        }
      },
      beforeMount() {
        this.$emit('label', {
          label: this.header
        })
      }
    }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .text-block:last-child {
    margin-bottom: 0;
  }
</style>
