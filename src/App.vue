<template>
  <div id="app">
    <div class="big-container">
      <div class="mobile-version visible-xs">
        <div class="mobile-menu">
          <left-menu></left-menu>
        </div>
        <div class="mobile-background">
        </div>
      </div>

      <div>
        <div class="hidden-xs block-menu">
          <left-menu></left-menu>
        </div>
        <div class="visible-sm block-menu">
          <right-menu></right-menu>
        </div>
      </div>

      <div class="ui menu visible-xs mobile">
        <a class="header item" @click="toggleMenu()" style="display: inline-block">
          <i class="bars icon"></i>
        </a>
      </div>

      <div class="center-menu">
        <router-view></router-view>
      </div>
      <div class="visible-md visible-lg visible-xl block-menu">
        <right-menu></right-menu>
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
  methods: {
    toggleMenu: function () {
      if (document.querySelector('.mobile-version .mobile-menu').classList.contains('open')) {
        document.querySelector('.mobile-version .mobile-menu').classList.remove('open');
        document.querySelector('.mobile-version .mobile-background').classList.remove('open');
      } else {
        document.querySelector('.mobile-version .mobile-menu').classList.add('open');
        document.querySelector('.mobile-version .mobile-background').classList.add('open');
      }
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
    margin-top: 1px !important;
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
  @media screen and (max-width: 768px) {
    .center-menu {
      margin-top: 50px;
    }
  }
  .bars.icon {
    margin: 0 !important;
  }

  .mobile-version .mobile-menu {
    position: absolute;
    z-index: 10;
    top: 42px;
    left: -275px;
    height: 100%;
    background-color: #286090 !important;
    transition: left 0.5s ease-in-out;
  }

  .mobile-version .mobile-menu.open {
    left: 0;
  }

  .mobile-version .mobile-menu .vertical.menu {
    border: none;
  }
  .mobile-version .mobile-background {
    /*position: fixed;*/
    z-index: 9;
    top: 0;
    bottom: -42px;
    left: 0;
    right: 0;
    transition: background-color 0.5s ease-in-out;
  }
  .mobile-version .mobile-background.open {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }

</style>
