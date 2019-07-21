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
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjdExQdnpKb09heWs/view?usp=sharing" target="_blank" rel="noopener">Памятка по паспортизации школьного музея</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MuseumAboutEducationPage",
    data() {
      return {
        header: 'Методическая библиотека',
      }
    },
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
</style>
