<template>
    <div class="ui right vertical menu">

      <div style="margin: 15px 0">
        <div id="vk_groups" style="margin: auto"></div>
      </div>
      <div style="margin: 15px 0">
        <div id="vk_groups1" style="margin: auto"></div>
      </div>

      <div class="ui vertical rectangle ad"
           data-text="Vertical Rectangle" style="margin: auto;">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5715873076999226"
             data-ad-slot="9318048131"
             data-ad-format="auto">
        </ins>
      </div>

      <a class="brand-book"
         href="https://may9.ru/brandbook/"
         target="_blank"
         style="margin-top: 15px; cursor: pointer">
        <img src="/static/images/links/75.jpg" alt="brandbook" style="width: 100%; margin-top: 15px">
      </a>
      <a class="year-2020"
         href="https://год2020.рф/"
         target="_blank"
         style="margin-top: 15px; cursor: pointer">
        <img src="/static/images/links/2020.svg" alt="2020" style="width: 100%; margin-top: 15px">
      </a>

      <a class="item first" href="https://edu.gov.ru/" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/Min_obr_i_nauki.png">
        </div>
        <div class="link-text">
          Министерство Просвещения Российской Федерации
        </div>
      </a>
      <a class="item" href="http://www.edu.ru" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/fed_port.png">
        </div>
        <div class="link-text">
          Федеральный портал "Российское образование"
        </div>
      </a>
      <a class="item" href="http://window.edu.ru" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/info_sistema.gif">
        </div>
        <div class="link-text">
          Информационная система "Единое окно доступа к образовательным ресурсам"
        </div>
      </a>
      <a class="item" href="http://school-collection.edu.ru" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/edin_kollektion.png">
        </div>
        <div class="link-text">
          Единая коллекция цифровых образовательных ресурсов
        </div>
      </a>
      <a class="item" href="http://fcior.edu.ru" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/fed_resurs.png">
        </div>
        <div class="link-text">
          Федеральный центр информационно-образовательных ресурсов
        </div>
      </a>
      <a class="item" href="http://turcentrrf.ru" target="_blank" rel="noopener">
        <div class="link-img">
          <img src="http://turizmpskov.ru/image/links/turcentrrf.png">
        </div>
        <div class="link-text">
          Федеральный центр детского и юношеского туризма и краеведения
        </div>
      </a>
    </div>
</template>
<script>
  VK.Widgets.Group("vk_groups", {mode: 1, width: "250", height: "auto", color3: '337AB7'}, 43893537);
  VK.Widgets.Group("vk_groups2", {mode: 1, width: "250", height: "auto", color3: '337AB7'}, 43893537);
  VK.Widgets.Group("vk_groups1", {mode: 1, width: "250", height: "auto", color3: '337AB7'}, 133855483);
  VK.Widgets.Group("vk_groups3", {mode: 1, width: "250", height: "auto", color3: '337AB7'}, 133855483);
    export default {
        name: "RightMenu"
    }
</script>

<style scoped>
  .vertical.menu {
    width: 275px;
    background-color: #286090 !important;
  }
  .vertical.menu a.item {
    background-color: #337ab7;
    border-color: #2e6da4;
    color: #fff;
    text-align: -moz-center;
    text-align: -webkit-center;
    text-align: center;
    display: flex;
    line-height: 1.3;
  }

  .vertical.menu a.item.first {
    margin-top: 15px;
  }

  .vertical.menu a.item:hover {
    background-color: #286090;
    border-color: #204d74;
    color: #fff;
  }
  .vertical.menu a.item:focus {
    background-color: #204d74;
    border-color: #122b40;
    color: #fff;
  }
  .vertical.menu a.item:active {
    background-color: #204d74;
    border-color: #122b40;
    color: #fff;
  }

  .vertical.menu a.item .link-img {
    width: 50px;
    display: flex;
    align-items: center;
  }
  .vertical.menu a.item .link-img img {
    width: 50px;
  }
  .vertical.menu a.item .link-text {
    width: 191px;
    display: flex;
    align-items: center;
  }
  .year-2020 img {
    height: 100%;
    background-color: white;
    padding: 15px 45px;
  }
</style>
