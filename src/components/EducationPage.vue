<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">
      <div class="ui secondary menu">
        <a class="item active" data-tab="information">Информация</a>
        <a class="item" data-tab="2018-2019">2018-2019</a>
        <a class="item" data-tab="2017-2018">2017-2018</a>
        <a class="item" data-tab="2016-2017">2016-2017</a>
        <a class="item" data-tab="2015-2016">2015-2016</a>
<!--        <a class="item" :data-tab="doc.year" v-for="doc in docsByYear">{{doc.year}}</a>-->
      </div>
      <div class="ui active tab segment" data-tab="information">
        <h2>Информация:</h2>
        <div class="text-block">
          Основной целью деятельности Учреждения является формирование и развитие творческих способностей обучающихся, удовлетворение их индивидуальных потребностей в интеллектуальном, нравственном и физическом совершенствовании, формирование культуры здорового и безопасного образа жизни, укрепление здоровья, а также на организацию их свободного времени.<br><br>
          Предметом деятельности Учреждения является осуществление образовательной деятельности.<br><br>
          В Учреждении реализуются дополнительные общеобразовательные общеразвивающие программы по туристско-краеведческому направлению.<br><br>
          Уровень образования - дополнительное образование детей и взрослых.<br><br>
          Форма обучения - очная.<br><br>
          Язык обучения - русский.<br><br>
          Нормативные сроки обучения – до 5 лет.
        </div>
        <div class="text-block">
          <div><h2>Документы:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/file/d/1M69X_53I__lhBNqipGve7P2HGjykP70N/view?usp=sharing" target="_blank" rel="noopener">Памятка по безопасности школьников в сети Интернет</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui tab segment" data-tab="2018-2019">
        <div class="text-block">
          <div><h2>2018-2019 учебный год</h2></div>
        </div>
      </div>
      <div class="ui tab segment" data-tab="2017-2018">
        <div class="text-block">
          <div><h2>2017-2018 учебный год</h2></div>
        </div>
      </div>
      <div class="ui tab segment" data-tab="2016-2017">
        <div class="text-block">
          <div><h2>2016-2017 учебный год</h2></div>
        </div>
      </div>
      <div class="ui tab segment" data-tab="2015-2016">
        <div class="text-block">
          <div><h2>2015-2016 учебный год</h2></div>
          <div class="text-block">
            <div><h2>Программы педагогов:</h2></div>
            <div class="ui relaxed divided list">
              <div class="item">
                <div class="item-icon">
                  <i class="file alternate outline icon"></i>
                </div>
                <div class="content">
                  <a class="header" href="https://drive.google.com/open?id=1tcNIZOpcnNh0iSAPTPPs9e3rog3vNcv0" target="_blank" rel="noopener">Юный экскурсовод. Баштырева</a>
                </div>
              </div>
              <div class="item">
                <div class="item-icon">
                  <i class="file alternate outline icon"></i>
                </div>
                <div class="content">
                  <a class="header" href="https://drive.google.com/open?id=1S3YEFJ5qLdmsWFLeF-TXL-lfZm5MjQ9H" target="_blank" rel="noopener">Моя малая Родина. Бойкова</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const host = 'http://84.201.137.113:3012';
  export default {
    name: "EducationPage",
    data() {
      return {
        header: 'Образование',
        docs: [],
        docsCommon: [],
        docsByYear: {},
        yearList: []
      }
    },
    mounted() {
      $('.menu .item')
        .tab()
      ;
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  h3, h2 {
    margin-bottom: 10px;
  }

  .item a {
    line-height: 1.3;
  }
  .item {
    display: flex !important;
  }
  .item-icon {
    display: flex;
    align-items: center;
  }
  .item-icon i {
    margin-right: 10px;
  }
  .item .content {
    display: flex;
  }
  .ui.list {
    margin: 10px 0;
  }
  .ui.secondary.menu {
    overflow-x: auto;
  }
</style>
