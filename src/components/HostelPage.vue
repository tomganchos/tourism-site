<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="logo">
        <img src="../assets/images/hostel/logo.jpg" alt="Хостел Турист"/>
      </div>

      <div class="text-block">
        Занимаемся приемом и размещением организованных групп школьников,
        студентов, а также всех желающих.<br>
        <span>Расчитано на </span><h3>38 мест.</h3>
      </div>
      <div class="text-block">
        <div class="title">Варианты номеров: </div>
        <div>
          <h3>2-х-местный номер – 1</h3>
        </div>
        <div>
          <h3>4-х-местные номера – 4</h3>
        </div>
        <div>
          <h3>5-местные номера – 4</h3>
        </div>
      </div>
      <div class="text-block">
        <div>
          Удобства на этаже, душевая комната.
          Предоставляется комплект белья, полотенце.
          К услугам гостей кухня с посудой и необходимой бытовой техникой
          (холодильник, электрический чайник, микроволновая печь, электрическая плита, утюг).
        </div>
        <div>
          В холле большой телевизор.
        </div>
        <div>
          Есть Wi-Fi.
        </div>
        <div>
          Рядом с общежитием продуктовый супермаркет «Пчелка», магазины «Магнит», «Пятерочка».
        </div>
      </div>
      <div class="text-block">
        <div class="title">Цены:</div>
        <div>
          1 койко-место: для школьников и педагогов Псковской области - <h3>350 рублей</h3>.
        </div>
        <div>
          Для всех остальных категорий граждан - <h3>400 рублей</h3>.
        </div>
      </div>
      <div class="title">Фотографии общежития:</div>
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
  export default {
    components: {
      Viewer
    },
    name: "HostelPage",
    data() {
      return {
        header: 'Общежитие (Хостел "Турист")',
        images: ['https://pp.vk.me/c638631/v638631908/14fe3/W5kfcP4DP0Q.jpg',
          'http://turizmpskov.ru/image/host/host2.png',
          'http://turizmpskov.ru/image/host/host3.png',
          'https://pp.vk.me/c638631/v638631908/14fd9/oG-31fD2Tjg.jpg',
          'http://turizmpskov.ru/image/host/host4.png'],
        options: { "inline": false, "button": true, "navbar": true, "title": false, "toolbar": false,
          "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false,
          "transition": true, "fullscreen": false, "keyboard": true, "url": "data-source" }
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    methods: {
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

  div.logo {
    text-align: right;
  }
  div.logo img {
    height: 150px;
    width: auto;
    margin-right: 0;
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
</style>
