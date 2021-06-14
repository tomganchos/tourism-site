<template>
    <nav class="ui left vertical menu"
         @click="setMobileMenu()">
      <router-link to="/" class="item"
                   data-mobile
                   style="text-align: -webkit-center">
        <img src="/static/images/logo/logoTurizm.png" height="150" alt="Logotype">
      </router-link>
      <a class="item" @click="changeView()">
        <i class="low vision icon"></i><span style="padding-left: 10px">{{ specialViewBtn }}</span>
      </a>
      <div class="ui accordion">
        <a class="title item">
          <i class="dropdown icon"></i>
          <span>Сведения об образовательной организации</span>
        </a>
        <div class="content">
          <p>
            <router-link to="/common-information"
                         data-mobile
                         class="sub-item">
              <span>Основные сведения</span>
            </router-link>
            <router-link to="/structure"
                         data-mobile
                         class="sub-item">
              <span>Структура и органы управления образовательной организацией</span>
            </router-link>
            <router-link to="/documents"
                         data-mobile
                         class="sub-item">
              <span>Документы</span>
            </router-link>
            <router-link to="/education"
                         data-mobile
                         class="sub-item">
              <span>Образование</span>
            </router-link>
            <router-link to="/educational-standards"
                         data-mobile
                         class="sub-item">
              <span>Образовательные стандарты</span>
            </router-link>
            <router-link to="/personal"
                         data-mobile
                         class="sub-item">
              <span>Руководство. Педагогический (научно-педагогический) состав</span>
            </router-link>
            <router-link to="/material-tech-provision"
                         data-mobile
                         class="sub-item">
              <span>Материально-техническое обеспечение и оснащённость образовательного процесса</span>
            </router-link>
            <router-link to="/stipends"
                         data-mobile
                         class="sub-item">
              <span>Стипендии и иные виды материальной поддержки</span>
            </router-link>
            <router-link to="/paid-education-services"
                         data-mobile
                         class="sub-item">
              <span>Платные образовательные услуги</span>
            </router-link>
            <router-link to="/financial-economic-activity" class="sub-item">
              <span>Финансово-хозяйственная деятельность</span>
            </router-link>
            <router-link to="/vacancies"
                         data-mobile
                         class="sub-item">
              <span>Вакантные места для приёма (перевода) обучающихся</span>
            </router-link>
            <router-link to="/accessible-environment"
                         data-mobile
                         class="sub-item">
              <span>Доступная среда</span>
            </router-link>
            <router-link to="/international-cooperation"
                         data-mobile
                         class="sub-item">
              <span>Международное сотрудничество</span>
            </router-link>
          </p>
        </div>
      </div>

      <router-link to="/distance-learning"
                   data-mobile
                   class="item">
        <span>Дистанционное обучение</span>
      </router-link>
      <router-link to="/for-pupils"
                   data-mobile
                   class="item">
        <span>Методическая копилка школьникам</span>
      </router-link>
      <router-link to="/tourist-routes"
                   data-mobile
                   class="item">
        <span>Туристские маршруты</span>
      </router-link>
      <router-link to="/museum-about-education"
                   data-mobile
                   class="item">
        <span>Музей истории народного образования Псковской области</span>
      </router-link>
      <a class="item" href="https://museum.pskovedu.ru/" target="_blank">
        <span>Цифровой школьный музей</span>
      </a>
      <router-link to="/childrens-tourism"
                   data-mobile
                   class="item">
        <span>Детский туризм</span>
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

      <router-link to="/trips"
                   data-mobile
                   class="item">
        <span>Экскурсионная деятельность</span>
      </router-link>
      <router-link to="/innovation"
                   data-mobile
                   class="item" style="display: none">
        <span>Инновационная площадка</span>
      </router-link>
      <router-link to="/hostel"
                   data-mobile
                   class="item">
        <span>Общежитие</span>
      </router-link>
      <router-link to="/plans"
                   data-mobile
                   class="item">
        <span>Планы работы Центра</span>
      </router-link>
      <router-link to="/results"
                   data-mobile
                   class="item">
        <span>Итоги мероприятий (приказы, справки)</span>
      </router-link>
      <router-link to="/publications"
                   data-mobile
                   class="item">
        <span>Публикации о нас</span>
      </router-link>
      <router-link to="/gallery"
                   data-mobile
                   class="item">
        <span>Фотогалерея</span>
      </router-link>
      <router-link to="/meth-library"
                   data-mobile
                   class="item">
        <span>Методическая библиотека</span>
      </router-link>
      <router-link to="/anti-corruption"
                   data-mobile
                   class="item">
        <span>Противодействие коррупции</span>
      </router-link>
      <router-link to="/contacts"
                   data-mobile
                   class="item">
        <span>Контакты</span>
      </router-link>
    </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "LeftMenu",
    props: [ 'specialView' ],
    data() {
      return {
        specialViewBtn: 'Версия для слабовидящих',
        specialVision: false
      }
    },

    // computed: {
    //   ...mapGetters(['getView'])
    // },

    mounted() {
      $('.ui.accordion')
        .accordion()
      ;
      // this.specialView = this.getView;
      console.log('leftMenu: %o', this.specialView);
      this.specialVision = this.specialView
      console.log('specialVision: %o', this.specialVision)
      if (this.specialVision) {
        this.specialViewBtn = 'Обычная версия'
      } else {
        this.specialViewBtn = 'Версия для слабовидящих'
      }
    },
    methods: {
      changeView: function() {
        console.log(this.specialVision);
        this.specialVision = !this.specialVision;
        console.log(this.specialVision);
        if (this.specialVision) {
          this.specialViewBtn = 'Обычная версия'
        } else {
          this.specialViewBtn = 'Версия для слабовидящих'
        }
        this.$emit('change-special-view', this.specialVision)
      },
      // ...mapActions({
      //   setView: 'setView'
      // }),
      routeTo: function(self) {
        console.log('self');
        console.log(self);
      },
      setMobileMenu: function() {
        // console.log('test')
        if (event.target.dataset.mobile === '' || event.target.parentNode.dataset.mobile === '') {
          this.$emit('mobileMenu', {})
        }
        // console.log(event.target)
        // console.log(event.target.dataset)
        // console.log(event.target.dataset.mobile)

      }
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
</style>
