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
              <a class="header" href="https://drive.google.com/file/d/137NIQFGLDYqrKsWtqUHcz6jq-cjx_uyr/view?usp=sharing" target="_blank" rel="noopener">Справка об отсутсвии платных услуг</a>
            </div>
          </div>

          <div class="item">
            <div class="item-icon">
              <i class="circle outline icon"></i>
            </div>
            <div class="content">
              В 2022 году ГБОУ ДО  "Псковский областной Центр детского и юношеского туризма и экскурсий" платных услуг не оказывает
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
