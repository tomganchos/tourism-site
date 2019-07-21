<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">

      <div class="text-block">
        <h3>Почтовый адрес: </h3><span>ул.Народная 53, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Приёмная директора: </h3><a href="tel:+78112576084" data-rel="external">+7 (8112) 57-60-84</a>, <a href="tel:88112576253" data-rel="external">8 (8112) 57-62-53</a>
      </div>
      <div class="text-block">
        <h3>Заместитель директора: </h3><a href="tel:+78112576253" data-rel="external">+7 (8112) 57-62-53</a>
      </div>
      <div class="text-block">
        <h3>Бухгалтерия: </h3><a href="tel:+78112576253" data-rel="external">+7 (8112) 57-62-53</a>
      </div>
      <div class="text-block">
        <h3>Общежитие: </h3><a href="tel:+78112576254" data-rel="external">+7 (8112) 57-62-54</a>
      </div>
      <div class="text-block" style="margin-bottom: 15px !important;">
        <h3>Электронная почта: </h3><a href="mailto:org608@pskovedu.ru">org608@pskovedu.ru</a>
      </div>


      <yandex-map
        :coords="[57.811781, 28.306505]"
        zoom="15"
        style="width: 600px; height: 400px;"
        :cluster-options="{
          1: {clusterDisableClickZoom: true}
         }"
        :behaviors="['drag']"
        :controls="['zoomControl', 'fullscreenControl']"
        :placemarks="placemarks"
        map-type="map"
      >

        <ymap-marker
          marker-id="1"
          marker-type="placemark"
          :coords="[57.811781, 28.306505]"
          hint-content="Hint content 1"
          :balloon="{header: 'header', body: 'body', footer: 'footer'}"
          :icon="{color: 'blue', glyph: 'education'}"
          cluster-name="1"
        ></ymap-marker>

      </yandex-map>
    </div>
  </div>
</template>

<script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  export default {
    name: "ContactsPage",
    components: { yandexMap, ymapMarker },
    data() {
      return {
        header: 'Контакты',
        placemarks: [
          {
            coords: [54.8, 39.8],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: "1",
            balloonTemplate: '<div>"Your custom template"</div>',
            callbacks: { click: function() {} }
          }
        ]
      }
    },
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  .text-block:last-child {
    margin-bottom: 15px !important;
  }
  .text-block {
    margin-bottom: 5px !important;
  }
</style>
