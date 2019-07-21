<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui card" v-for="item in results">
      <div class="content">
        <span class="header">{{item.title}}</span>
        <div class="meta">
          <span class="date">{{item.date | moment("DD.MM.YYYY")}}</span>
        </div>
        <div class="description">{{item.description}}</div>
      </div>
      <div class="extra content">
        <div class="ui relaxed divided list">
          <div class="item" v-for="link in item.links">
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
    name: "ResultsPage",
    data() {
      return {
        header: 'Итоги мероприятий (приказы, справки)',
        results: []
      }
    },
    mounted() {
      this.getResults();
    },
    methods: {
      getResults() {
        axios.get('static/data/news.json')
          .then(response => {
            this.results = response.data.map((item) => {
              console.log(item);
              if (item.results === true) {
                return {
                  title: item.title,
                  description: item.description,
                  date: item.date,
                  links: item.links
                }
              }
            })
          });
        console.log(this.results);
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
    color: #204d74;
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

</style>
