<template>
  <div id="app" :class="{ 'special-view': specialView }">
    <div class="big-container">
      <div class="mobile-version visible-xs">
        <div class="mobile-menu">
          <left-menu :special-view="specialView" @change-special-view="changeSpecialView" @mobileMenu="toggleMenu()"/>
        </div>
      </div>

      <div>
        <div class="hidden-xs block-menu">
          <left-menu :special-view="specialView" @change-special-view="changeSpecialView" />
        </div>
        <div class="visible-sm block-menu" v-if="displayWidth >= 768 && displayWidth < 992">
          <right-menu/>
        </div>
      </div>

      <div class="ui menu visible-xs mobile">
        <a class="header item" @click="toggleMenu()" style="display: inline-block">
          <i class="bars icon"/>
        </a>
        <div class="mobile-header">
          <h1 class="ui medium header">{{header}}</h1>
        </div>
      </div>

      <div class="center-menu">
        <router-view @label="setHeader"/>
      </div>
      <div class="visible-md visible-lg visible-xl block-menu" v-if="displayWidth >= 992">
        <right-menu/>
      </div>
    </div>

    <div class="footer">Псков, 2019</div>
  </div>
</template>

<script>
import  LeftMenu from "@/components/menu/LeftMenu";
import RightMenu from "@/components/menu/RightMenu";
export default {
  name: 'App',
  components: {RightMenu, LeftMenu},
  mounted() {
    $('.ui.accordion')
      .accordion()
    ;
  },
  data () {
    return {
      header: '',
      displayWidth: window.innerWidth,
      specialView: false
    }
  },
  created() {
    console.log(window.localStorage.getItem('special_view'))
    if (window.localStorage.getItem('special_view')) {
      this.specialView = window.localStorage.getItem('special_view') === 'true'
    } else {
      window.localStorage.setItem('special_view', this.specialView)
    }
    console.log('specialView %o', this.specialView)
  },
  updated() {
    this.displayWidth = window.innerWidth
  },
  methods: {
    toggleMenu: function () {
      if (document.querySelector('.mobile-version .mobile-menu').classList.contains('open')) {
        document.querySelector('.mobile-version .mobile-menu').classList.remove('open');
      } else {
        document.querySelector('.mobile-version .mobile-menu').classList.add('open');
      }
    },
    setHeader: function (data) {
      this.header = data.label
    },
    changeSpecialView (value) {
      console.log(value)
      this.specialView = value
      window.localStorage.setItem('special_view', this.specialView)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    background-color: #edeef0
  }
  .big-container {
    display: flex;
    max-width: 1200px;
    padding: 0 5px;
    margin: auto;
  }
  .block-menu {
    margin: 5px 0
  }
  .menu.mobile {
    width: 100%;
    position: fixed;
    margin-left: -5px !important;
    margin-right: -5px !important;
    margin-top: 0 !important;
    border-radius: 0 0 .28571429rem .28571429rem;
    z-index: 10;
  }
  .footer {
    text-align: center;
    margin-bottom: 10px
  }
  .center-menu {
    width: 100%;
    margin: 5px;
  }
  @media screen and (max-width: 767px) {
    .center-menu {
      margin-top: 40px;
    }
  }
  .bars.icon {
    margin: 0 !important;
  }

  .mobile-version .mobile-menu {
    top: 42px;
    width: 100%;
    z-index: 10;
    position: fixed;
    height: 100%;
    background-color: #286090 !important;
    display: none;
  }
  .mobile-version .mobile-menu.open {
    display: block;
  }
  .mobile-version .mobile-menu .menu {
    width: 100% !important;
  }

  .mobile-version .mobile-menu .vertical.menu {
    border: none;
  }
  .mobile-version .mobile-background {
    position: absolute;
    height: calc(100% + 260px);
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*transition: background-color 0.5s ease-in-out;*/
  }
  .mobile-version .mobile-background.open {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }

  @media (max-width: 767px) {
    .visible-xs {
      display: flex !important;
    }
  }
  .mobile-header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .mobile-header h1 {
    color: #204d74 !important;
    white-space: nowrap;
    overflow: hidden;
  }
  .special-view#app {
    font-size: 130%;
  }
  .special-view#app .ui.medium.header {
    font-size: 160%;
  }
  .special-view#app .ui.menu {
    font-size: 100%;
  }
  .special-view#app .ui.tab.segment {
    font-size: 90%;
  }
  .special-view#app .ui.segment.body {
    font-size: 95%;
  }
  .special-view#app .ui.segment.link {
    font-size: 100%;
  }

</style>
