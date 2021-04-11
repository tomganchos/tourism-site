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
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1YnZx8exJ7_OpbHP-ZnxtwT8NReOc-gYd/view?usp=sharing" target="_blank" rel="noopener">Экскурсии</a>
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
        header: 'Музей истории народного образования Псковской области',
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
