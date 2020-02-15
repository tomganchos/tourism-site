<template>
  <div>

    <carousel v-if="displayWidth >= 768" :data=slider :controls="false" :indicators="false" :interval="3000"/>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui card" v-for="item in news">
        <viewer :options="options" :images="item.images"
                @inited="inited"
                class="viewer image" ref="viewer">
          <template slot-scope="scope">
            <img class="photo image--cover"
                 loading="lazy"
                 v-for="src in scope.images"
                 :style="{ 'width': (100 / scope.images.length) + '%' }"
                 :src="src.preview ? src.preview : src"
                 :data-source="src.full ? src.full : src"
                 :key="src.preview ? src.preview : src" alt="news-photo">
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
              <i :class="link.type + ' icon'"></i>
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
          '<svg role="image" aria-label="1" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1100 460" class="image"><image xlink:href="/static/images/carousel/1.jpg"/></svg>',
          '<svg role="image" aria-label="2" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1100 460" class="image"><image xlink:href="/static/images/carousel/2.jpg"/></svg>',
          '<svg role="image" aria-label="3" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1100 460" class="image"><image xlink:href="/static/images/carousel/3.jpg"/></svg>',
        ],
        options: { "inline": false, "button": true, "navbar": true, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": true, "fullscreen": false, "keyboard": true, "url": "data-source" },
        news: [],
        displayWidth: window.innerWidth
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
        axios.get('static/data/news.json?1')
          .then(response => {
            this.news = response.data
          });
        // console.log(this.results);
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
    margin-top: 5px;
  }
  .ui.card {
    width: 100%;
    margin: 10px 0 !important;
  }
  .ui.card:first-child {
    margin-top: 10px !important;
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
  .card .content .description {
    white-space: pre-line;
  }
  .ui.list {
    margin: 10px 0 !important;
  }
  .card .image {
    cursor: pointer;
    display: flex !important;
  }
  .ui.card .header {
    color: #204d74 !important;
  }
  .card .extra.content {
    padding: 0 1em !important;
  }

  @media screen and (max-width: 767px) {
    .desktop-only {
      display: none;
    }
  }

</style>
