<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div v-if="!$route.params.id">
      <router-link v-for="trip in trips" :to="trip.route" :key="trip.route">
        <div class="ui segment link" >
          <img class="ui small left floated image image--cover" alt="photo"  :src="trip.photo">
          <div class="personal-name title">{{trip.name}}</div>
          <div class="description">{{trip.duration}}</div>
          <div class="description">{{trip.description}}</div>
        </div>
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TripPage from "@/components/TripPage";
  import axios from 'axios';

  export default {
    name: "TripsPage",
    components: { TripPage },
    data() {
      return {
        header: 'Экскурсионная деятельность',
        trips: []
      }
    },
    created() {
      this.getTrips();
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    methods: {
      getTrips() {
        axios.get('static/data/trips.json')
          .then(response => {
            this.trips = response.data.map(item => {
              return {
                route: item.route,
                photo: item.photo,
                name: item.name,
                duration: item.duration,
                description: item.description,
                images: item.images,
                page: item.page
              }
            })
          });
        console.log(this.trips);
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .link {
    cursor: pointer;
    clear: both;
  }
  .description {
    margin-bottom: 3px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:focus, a:hover {
    text-decoration: none;
  }
  /deep/.header {
    margin: 0;
  }
  .image {
    height: 100px !important;
    width: 150px !important;
    overflow: hidden;
  }
  .image--cover {
    object-fit: cover;
  }
</style>
