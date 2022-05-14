<template>
  <div>
    <div class="ui segment head hidden-xs trip-page-head">
      <router-link to="/children-routes">&#8592; Вернуться</router-link>
      <h1 class="ui medium header">{{trip.name}}</h1>
    </div>
    <div class="ui segment body" >
      <div class="html" v-html="trip.page"></div>
      <h2>Фотогалерея</h2>
      <viewer :options="options" :images="images"
              @inited="inited"
              class="viewer" ref="viewer">
        <template slot-scope="scope">
          <img class="photo image--cover"
               v-for="src in scope.images"
               :src="src" :key="src" alt="hostel-photo">
        </template>
      </viewer>
    </div>
  </div>
</template>

<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from "v-viewer/src/component.vue"
  import axios from 'axios';
  export default {
    components: {
      Viewer
    },
    name: "ChildrenRoutePage",
    data() {
      return {
        trip: {},
        images: [],
        header: '',
        options: { "inline": false, "button": true, "navbar": true, "title": false, "toolbar": false,
          "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false,
          "transition": true, "fullscreen": false, "keyboard": true, "url": "data-source" }
      }
    },
    mounted() {
      this.getTrips();
      console.log(this.$route.params.id);
      window.scrollTo(0, 0)
    },
    methods: {
      getTrips() {
        axios.get('../static/data/children.json?' + new Date().getTime())
          .then(response => {
            console.log(response.data);
            this.trip = response.data[this.$route.params.id - 1]
            }).then(() => {
              this.images = this.trip.images
            });
        console.log(this.trip);
      },
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
      }
    }
    // props: [id, text]
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .header {
    margin: 0 !important;
  }
  .trip-page-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .viewer {
    margin-bottom: 15px;
  }
  img.photo {
    width: 33%;
    height: 150px;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    cursor: pointer;
  }
  .image--cover {
    object-fit: cover;
  }
  .title {
    color: #204d74 !important;
  }
  @media screen and (max-width: 400px){
    img.photo {
      height: 75px;
      width: 50%;
    }
    div.logo img {
      height: 75px;
    }
  }
  >>> .router-link-active {
    white-space: nowrap;
  }
  h1.header {
    text-align: right;
  }
  .html::v-deep .h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #204d74 !important;
    font-weight: 700;
  }
  .h2 {
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 1rem;
    color: #204d74 !important;
    font-weight: 700;
  }
</style>
