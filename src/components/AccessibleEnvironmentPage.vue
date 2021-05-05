<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <div><h2>Документы:</h2></div>

        <div class="ui relaxed divided list">
          <div class="item" v-for="doc in docs">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="doc.link" target="_blank" rel="noopener">{{doc.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessibleEnvironmentPage",
  data() {
    return {
      header: 'Доступная среда',
      docs: [
        {
          'name': 'Доступная среда',
          'link': 'https://drive.google.com/file/d/130H548nzJIwunHJ2hbh9UZ7RiQNqFQEK/view?usp=sharing'
        }
      ]
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
