<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <h2>Информация об общежитии</h2>
      <div class="text-block">
        <h3>Наличие общежития: </h3><span>Да</span>
      </div>
      <div class="text-block">
        <h3>Количество комнат: </h3><span>9</span>
      </div>
      <div class="text-block">
        <h3>2-х-местных номеров: </h3><span>1</span>
      </div>
      <div class="text-block">
        <h3>4-х-местных номеров: </h3><span>4</span>
      </div>
      <div class="text-block">
        <h3>5-местных номеров: </h3><span>4</span>
      </div>
      <div class="text-block">
        <h3>Стоимость: </h3><span>1 койко-место: для школьников и педагогов Псковской области - 350 рублей; Для всех остальных категорий граждан - 400 рублей.</span>
      </div>
      <div class="text-block">
        <h3>Наличие интерната: </h3><span>Нет</span>
      </div>
      <div class="text-block" style="margin-bottom: 20px !important;">
        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/open?id=1RVu7AmLU8AaAUaicLgBZOQe2hMH8Sc3O" target="_blank" rel="noopener">Положение об общежитии</a>
            </div>
          </div>
        </div>
      </div>
      <h2>Информация о стипендиях и иных мерах социальной поддержки</h2>
      <div class="text-block">
        <h3>Стипендии и иные меры социальной поддержки: </h3><span>Нет</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StipendsPage",
    data() {
      return {
        header: 'Стипендии и иные виды материальной поддержки',
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .text-block {
    margin-bottom: 5px !important;
  }
  h2 {
    margin-bottom: 10px;
  }
</style>
