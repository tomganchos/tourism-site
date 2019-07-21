<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">

      <div class="ui relaxed divided list">
        <a class="item" :href="doc.link" target="_blank" rel="noopener" v-for="doc in docs" :key="doc.name">
          <div class="item-icon">
            <i class="indent icon"></i>
          </div>
          <div class="content">
            <a class="header">{{doc.name}}</a>
            <div class="description">{{doc.date | moment('DD.MM.YYYY')}} | {{doc.journal}}</div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios';
  let moment = require('moment');
  export default {
    name: "PublicationPage",
    data() {
      return {
        header: 'Публикации о Нас',
        docs: []

      }
    },
    computed: {
      ...mapGetters(['getView'])
    },
    mounted() {
      this.specialVision = this.getView;
      console.log(this.specialVision);
      this.getDocs();
    },
    updated() {
      this.specialVision = this.getView;
    },
    methods: {
      getDocs() {
        axios.get('static/data/publications.json')
          .then(response => {
            this.docs = response.data.map((item) => {
              return {
                name: item.name,
                link: item.link,
                category: item.category,
                date: item.date,
                journal: item.journal
              }
            })
          });
        console.log(this.docs);
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";

  .ui.segment.body .item a {
    line-height: 1.3;
  }
  .ui.segment.body .item {
    display: flex;
  }

  .item:hover, .item:focus {
    background-color: #eee;
    cursor: pointer;
    margin-left: -14px;
    margin-right: -14px;
    margin-bottom: -1px;
    padding-left: 14px;
    padding-right: 14px;
    border-bottom: 1px solid rgba(34,36,38,.15);
  }
  .item:first-child:hover, .item:first-child:focus {
    margin-top: -14px;
    padding-top: 14px;
  }
  .item:last-child:hover, .item:last-child:focus {
    margin-bottom: -14px;
    padding-bottom: 14px;
    border-bottom: none;
  }
  .ui.list {
    margin: 0;
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
    flex-wrap: wrap;
  }
  .item .description {
    margin-top: 5px;
    width: 100%;
  }
</style>
