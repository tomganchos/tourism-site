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

  export default {
    name: "TripsPage",
    components: {TripPage},
    data() {
      return {
          header: 'Экскурсионная деятельность',
          trips: [
              {
                  route: '/trips/1',
                  photo: '/static/images/trips/1.jpg',
                  name: '«На страже веков»',
                  duration: 'Продолжительность маршрута - 1 день',
                  description: 'Путешествие по местам боевой славы Псковщины. Экскурсия по городу Пскову, крепости ' +
                      'Изборск, Свято-Успенскому Псково-Печорскому монастырю.'
              }, {
                  route: '/trips/2',
                  photo: '/static/images/trips/2.jpg',
                  name: '«Псков через века»',
                  duration: 'Продолжительность маршрута - 1 день',
                  description: 'Рассказ о городе Пскове от истоков до его полного становления. Обзорная экскурсия ' +
                      'по городу с посещением Псковского музея-заповедника.'
              }, {
                  route: '/trips/3',
                  photo: '/static/images/trips/3.JPG',
                  name: '«Южный щит»',
                  duration: 'Продолжительность маршрута - 1 день',
                  description: 'Посещение военно-исторического музея в городе Остров. Рассказ о периоде Великой ' +
                      'Отечественной войны в экспонатах. Посещение военно-мемориального комплекса «Линия ' +
                      'Сталина» (д. Холматка) – линия обороны советских солдат.'
              }, {
                  route: '/trips/4',
                  photo: '/static/images/trips/0.jpg',
                  name: '«Александр Невский и Псковская земля»',
                  duration: 'Продолжительность маршрута - 1 день',
                  description: 'Рассказ о Великом имени России – Александре Невском на Псковской земле. Посещение ' +
                      'Псковского Кремля и Воинского храма Святого Благоверного Великого Князя Александра Невского ' +
                      'в городе Пскове.'
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
