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
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjT09yUVhaLWV1VkU/view?usp=sharing" target="_blank" rel="noopener">Платные образовательные услуги</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PaidEducationServicesPage",
    data() {
      return {
        header: 'Платные образовательные услуги',
      }
    },
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .text-block:last-child {
    margin-bottom: 0;
  }
</style>
