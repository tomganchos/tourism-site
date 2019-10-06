<template>
  <div>

    <carousel :data=slider :controls="false" :indicators="false" :interval="3000"></carousel>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui card" v-for="item in news">
        <viewer :options="options" :images="item.images"
                @inited="inited"
                class="viewer image" ref="viewer">
          <template slot-scope="scope">
            <img class="photo image--cover"
                 v-for="src in scope.images"
                 :src="src" :key="src" alt="hostel-photo">
          </template>
        </viewer>
<!--        <img alt="image" v-for="image in item.images" :src="image">-->
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

    <div class="ui card" style="">
      <div class="image">
        <img src="https://pp.userapi.com/c841235/v841235966/3f34a/gKqGpdsCS-I.jpg">
      </div>
      <div class="content">
        <a class="header">Соревнования по технике пешеходного туризма</a>
        <div class="meta">
          <span class="date">17 ноября 2017</span>
        </div>
        <div class="description">
          11-12 ноября 2017 года в Пскове прошли соревнования по технике пешеходного туризма в закрытых помещениях.
        </div>
      </div>
      <div class="extra content">
        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/open?id=1tcNIZOpcnNh0iSAPTPPs9e3rog3vNcv0" target="_blank" rel="noopener">Юный экскурсовод. Баштырева</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/open?id=1S3YEFJ5qLdmsWFLeF-TXL-lfZm5MjQ9H" target="_blank" rel="noopener">Моя малая Родина. Бойкова</a>
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
  import 'viewerjs/dist/viewer.css'
  import Viewer from "v-viewer/src/component.vue"

  export default {
    components: {
      Viewer
    },
    name: "NewsPage",
    data() {
      return {
        header: 'Последние новости',
        slider: [
          // '<div class="slide"><img src="http://turizmpskov.ru/image/index/1.jpg" alt="1" height="400px"></div>',
          '<svg role="image" aria-label="1" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2560 1067" class="image"><image xlink:href="http://turizmpskov.ru/image/index/1.jpg"></image></svg>',
          '<svg role="image" aria-label="2" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2560 1067" class="image"><image xlink:href="http://turizmpskov.ru/image/index/M6xY5QGBMeQ.jpg"></image></svg>',
          '<svg role="image" aria-label="3" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2560 1067" class="image"><image xlink:href="http://turizmpskov.ru/image/index/E15X2dJvtI8.jpg"></image></svg>',
        ],
        options: { "inline": false, "button": true, "navbar": true, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": true, "fullscreen": false, "keyboard": true, "url": "data-source" },
        news: []
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
        axios.get('static/data/news.json')
          .then(response => {
            this.news = response.data.map((item) => {
              console.log(item);
              return {
                title: item.title,
                description: item.description,
                date: item.date,
                links: item.links,
                images: item.images
              }
            })
          });
        console.log(this.results);
      },
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .ui.segment.head {
    margin-top: 0;
  }
  .ui.card {
    width: 100%
  }
  .ui.card:first-child {
    margin-top: 5px !important;
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
    margin: 10px 0;
  }
  .card .image {
    cursor: pointer;
  }

</style>
