<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui card" v-for="weekItem in distance.weeks">
      <div class="content">
        <span class="header">{{weekItem.date}}</span>
      </div>
      <div class="extra content" v-for="work in weekItem.works">
        <div class="description">{{work.title}}</div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="link in work.links">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="link.link" target="_blank" rel="noopener">{{link.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from 'vue-moment';
  import axios from 'axios';
  export default {
    name: "DistanceLearningPage",
    data() {
      return {
        header: 'Дистанционное обучение',
        distance: []
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    mounted() {
      this.getNews();
    },
    methods: {
      getNews() {
        axios.get('static/data/distance.json?' + new Date().getTime())
          .then(response => {
            this.distance = response.data
            console.log(this.distance)
          });
        // console.log(this.results);
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .ui.card {
    width: 100%;
    margin: 5px 0;
  }
  .ui.card .header {
    color: #204d74 !important;
  }
  .item a {
    line-height: 1.3;
  }
  .item {
    display: flex !important;
  }
  .item-icon {
    display: flex;
    align-items: center;
  }
  .item-icon i {
    margin-right: 10px;
  }
  .item .content {
    display: flex;
  }
  .ui.list {
    margin: 0;
  }
  .ui.card>.content {
    padding: 1em 1em 0.5em 1em;
  }
  .ui.card>.extra {
    padding: 1em;
  }
  .description {
    margin-bottom: 10px;
    font-weight: bold;
    color: #204d74 !important;
  }
</style>
