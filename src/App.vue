<template>
  <div id="app">
    <div class="big-container">
      <div>
        <div class="hidden-xs block-menu">
          <left-menu></left-menu>
        </div>
        <div class="visible-sm block-menu">
          <right-menu></right-menu>
        </div>
      </div>

      <div class="ui menu visible-xs mobile">
        <a class="header item" style="display: inline-block">
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
import LeftMenu from "@/components/menu/LeftMenu";
import RightMenu from "@/components/menu/RightMenu";
export default {
  name: 'App',
  components: {RightMenu, LeftMenu},
  mounted() {
    $('.ui.accordion')
      .accordion()
    ;
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
    margin: auto
  }
  .block-menu {
    margin: 5px 0
  }
  .menu.mobile {
    width: 100%;
    position: fixed;
    margin-left: -5px;
    margin-top: 1px;
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
</style>
