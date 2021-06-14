<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <div><h2>Документы:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in docs">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ChildrensTourismPage",
  data() {
    return {
      header: 'Детский туризм',
      docs: []
    }
  },
  beforeMount() {
    this.$emit('label', {
      label: this.header
    })
  },
  mounted() {
    this.getDocs();
  },
  methods: {
    getDocs() {
      axios.get('static/data/docs.json?' + new Date().getTime())
        .then(response => {
          this.docs = response.data.filter(doc => doc.page === 'children')
        });
    }
  }
}
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .text-block:last-child {
    margin-bottom: 0;
  }
</style>
