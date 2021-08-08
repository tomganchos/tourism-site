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
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjaDdWWmRqMUVEZWM/view?usp=sharing" target="_blank" rel="noopener">Методические рекомендации по организации научно-исследовательской деятельности обучающихся</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjSGtOdlpDcFN1UUU/view?usp=sharing" target="_blank" rel="noopener">Регламент проведения соревнований по спортивному туризму</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjUEVrUHhuT0RKV2c/view?usp=sharing" target="_blank" rel="noopener">Правила вида "Спортивное ориентирование"</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjdExQdnpKb09heWs/view?usp=sharing" target="_blank" rel="noopener">Памятка по паспортизации школьного музея</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjNEoxVjFRcU9XeEE/view?usp=sharing" target="_blank" rel="noopener">Методические рекомендации по реализации доп.программ по туристско-краеведческой деятельности</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/open?id=1Y6uU3xQdoBEzL5V9reC-Zw_YTf0xOFkY" target="_blank" rel="noopener">Методическое пособие "Школа безопасности"</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1gSbFM7DwamdLTmktbvaU_rviHdshU8NV/view?usp=sharing" target="_blank" rel="noopener">Методичка по туризму</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MethLibraryPage",
      data() {
        return {
          header: 'Методическая библиотека',
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
</style>
