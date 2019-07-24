<template>
    <nav class="ui left vertical menu" :class="specialVision">
      <router-link to="/" class="item" style="text-align: -webkit-center">
        <img src="http://turizmpskov.ru/image/logoTurizm/logoTurizm2.png" height="150" alt="Logotype">
      </router-link>
      <a class="item" @click="changeView()">
        <i class="low vision icon"></i><span style="padding-left: 10px">{{specialVisionBtn}}</span>
      </a>
      <div class="ui accordion">
        <a class="title item">
          <i class="dropdown icon"></i>
          <span>Сведения об образовательной организации</span>
        </a>
        <div class="content">
          <p>
            <router-link to="/common-information" class="sub-item">
              <span>Основные сведения</span>
            </router-link>
            <router-link to="/structure" class="sub-item">
              <span>Структура</span>
            </router-link>
            <router-link to="/documents" class="sub-item">
              <span>Документы Центра</span>
            </router-link>
            <router-link to="/education" class="sub-item">
              <span>Образование</span>
            </router-link>
            <router-link to="/educational-standards" class="sub-item">
              <span>Образовательные стандарты</span>
            </router-link>
            <router-link to="/personal" class="sub-item">
              <span>Руководство. Педагогический (научно-педагогический) состав</span>
            </router-link>
            <router-link to="/material-tech-provision" class="sub-item">
              <span>Материально-техническое обеспечение и оснащённость образовательного процесса</span>
            </router-link>
            <router-link to="/stipends" class="sub-item">
              <span>Стипендии и иные виды материальной поддержки</span>
            </router-link>
            <router-link to="/paid-education-services" class="sub-item">
              <span>Платные образовательные услуги</span>
            </router-link>
<!--            <router-link to="/financial-economic-activity" class="sub-item">-->
<!--              <span>Финансово-хозяйственная деятельность</span>-->
<!--            </router-link>-->
            <router-link to="/vacancies" class="sub-item">
              <span>Вакантные места для приёма (перевода)</span>
            </router-link>
          </p>
        </div>
      </div>

      <router-link to="/tourist-routes" class="item">
        <span>Туристские маршруты</span>
      </router-link>
      <router-link to="/museum-about-education" class="item">
        <span>Музей истории народного образования Псковской области</span>
      </router-link>

<!--      <div class="ui accordion">-->
<!--        <a class="title item">-->
<!--          <i class="dropdown icon"></i>-->
<!--          <span>Отделы Центра</span>-->
<!--        </a>-->
<!--        <div class="content">-->
<!--          <p>-->
<!--            <router-link to="/local-history-section" class="sub-item">-->
<!--              <span>Отдел краеведения</span>-->
<!--            </router-link>-->
<!--            <router-link to="/tourism-section" class="sub-item">-->
<!--              <span>Отдел по туризму</span>-->
<!--            </router-link>-->
<!--            <router-link to="/museum-section" class="sub-item">-->
<!--              <span>Отдел музейной работы</span>-->
<!--            </router-link>-->
<!--            <router-link to="/trip-section" class="sub-item">-->
<!--              <span>Отдел экскурсионной работы</span>-->
<!--            </router-link>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->

      <router-link to="/trips" class="item">
        <span>Экскурсионная деятельность</span>
      </router-link>
      <router-link to="/innovation" class="item">
        <span>Инновационная площадка</span>
      </router-link>
      <router-link to="/hostel" class="item">
        <span>Общежитие (Хостел)</span>
      </router-link>
      <router-link to="/plans" class="item">
        <span>Планы работы Центра</span>
      </router-link>
      <router-link to="/results" class="item">
        <span>Итоги мероприятий (приказы, справки)</span>
      </router-link>
      <router-link to="/publications" class="item">
        <span>Публикации о нас</span>
      </router-link>
      <router-link to="/gallery" class="item">
        <span>Фотогалерея</span>
      </router-link>
      <router-link to="/meth-library" class="item">
        <span>Методическая библиотека</span>
      </router-link>
      <router-link to="/anti-corruption" class="item">
        <span>Противодействие коррупции</span>
      </router-link>
      <router-link to="/contacts" class="item">
        <span>Контакты</span>
      </router-link>
    </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "LeftMenu",
    data() {
      return {
        // TODO: VUEX Vision
        specialVisionBtn: 'Версия для слабовидящих',
        specialVision: null
      }
    },

    computed: {
      ...mapGetters(['getView'])
    },

    mounted() {
      $('.ui.accordion')
        .accordion()
      ;
      this.specialVision = this.getView;
      console.log(this.specialVision);
    },
    methods: {
      changeView: function() {
        console.log(this.specialVision);
        this.specialVision = !this.specialVision;
        console.log(this.specialVision);
        this.setView(this.specialVision);
        if (this.specialVision) {
          this.specialVisionBtn = 'Версия для слабовидящих'
        } else {
          this.specialVisionBtn = 'Обычная версия'
        }
      },
      ...mapActions({
        setView: 'setView'
      })
    },
    // updated() {
    //   this.specialVision = this.getView;
    // }
  }
</script>

<style>
  .vertical.menu {
    width: 275px !important;
    /*margin: 5px;*/
  }
  .vertical.menu .item>i.icon {
    float: none !important;
    margin: 0 !important;
  }
  .vertical.menu .item,
  .vertical.menu .active.item {
    background-color: #337ab7 !important;
    border-color: #2e6da4 !important;
    color: #fff !important;
    text-align: -moz-center;
    text-align: -webkit-center;
    text-align: center;
    line-height: 1.3 !important;
    padding: 10px !important;
  }
  .vertical.menu .item:hover,
  .vertical.menu .active.item:hover,
  .vertical.menu .item:focus,
  .vertical.menu .active.item:focus {
    background-color: #286090 !important;
    border-color: #204d74 !important;
    color: #fff !important;
  }
  .vertical.menu .item:active,
  .vertical.menu .active.item:active {
    background-color: #204d74 !important;
    border-color: #122b40 !important;
    color: #fff !important;
  }

  .vertical.menu a.sub-item {
    display: flex !important;
    padding: 3px 10px !important;
    justify-content: center !important;
  }
  .vertical.menu a.sub-item:hover, .vertical.menu a.sub-item:focus {
    background-color: #edeef0;
    text-decoration: none;
  }
  .vertical.menu a.sub-item:active {
    background-color: #d2d4d9;
    text-decoration: none;
  }
  .vertical.menu a.sub-item span {
    text-align: center;
  }
  .vertical.menu div.content {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .ui.accordion .title.item:not(.ui) {
    padding: 10px !important;
  }
  .special-view a.item span,
  .special-view a.item span {
    font-size: 130%;
  }

</style>
