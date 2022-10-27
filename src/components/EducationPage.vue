<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">
      <div class="ui secondary menu">
        <a class="item active" data-tab="information">Информация</a>
        <a v-for="doc in docs" class="item" :data-tab="doc.year">{{doc.year}}</a>
      </div>
      <div class="ui active tab segment" data-tab="information">
        <h2>Информация:</h2>
        <div class="text-block">
          Основной целью деятельности Учреждения является формирование и развитие творческих способностей обучающихся, удовлетворение их индивидуальных потребностей в интеллектуальном, нравственном и физическом совершенствовании, формирование культуры здорового и безопасного образа жизни, укрепление здоровья, а также на организацию их свободного времени.<br><br>
          Предметом деятельности Учреждения является осуществление образовательной деятельности.<br><br>
          В Учреждении реализуются дополнительные общеобразовательные общеразвивающие программы по туристско-краеведческому направлению.<br><br>
          Уровень образования - дополнительное образование детей и взрослых.<br><br>
          Форма обучения - очная и заочная, с применением дистанционных образовательных технологий.<br><br>
          Язык обучения - русский.<br><br>
          Нормативные сроки обучения – до 5 лет.<br><br>
          Организация не проводит обучение по договорам.
        </div>
        <div class="text-block">
          <div><h2>Документы:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/file/d/1M69X_53I__lhBNqipGve7P2HGjykP70N/view?usp=sharing" target="_blank" rel="noopener">Памятка по безопасности школьников в сети Интернет</a>
              </div>
            </div>
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/open?id=1ywyl0uFP4IL3VxUDJ5QmhPVHrLi5jMoK" target="_blank" rel="noopener">Методические рекомендации по расследованию несчастных случаев</a>
              </div>
            </div>
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/open?id=1ZhLK45cOqTEgmcmmPTVZzyBqy4Fm5XdI" target="_blank" rel="noopener">Об утверждении Правил организованной перевозки группы детей автобусами</a>
              </div>
            </div>
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/open?id=1HL-gBm43CkjQuvMOskAcgDcD3qjll6CE" target="_blank" rel="noopener">Методические рекомендации по реализации доп.программ</a>
              </div>
            </div>
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/file/d/1-aVXMis0pJCTNjh65lHxl6YLq9x6diGp/view" target="_blank" rel="noopener">Лицензия</a>
              </div>
            </div>
            <div class="item">
              <div class="item-icon">
                <i class="file alternate outline icon"/>
              </div>
              <div class="content">
                <a class="header" href="https://drive.google.com/file/d/1oGHSvQQdyZfmqs2uWOHTQYbF0R2yrCi5/view?usp=sharing" target="_blank" rel="noopener">Новая лицензия</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-for="doc in docs" class="ui tab segment" :data-tab="doc.year">
        <div class="text-block">
          <div><h2>{{ doc.year }} учебный год</h2></div>
        </div>
        <div class="text-block" v-if="doc.programs.length > 0">
          <div><h2>Программы педагогов:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item" v-for="item in doc.programs">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.label}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-block" v-if="doc.common.length > 0">
          <div><h2>Методические и иные документы для обеспечения образовательного процесса:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item" v-for="item in doc.common">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.label}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-block" v-if="doc.achievements.length > 0">
          <div><h2>Достижения педагогов и обучающихся:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item" v-for="item in doc.achievements">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.label}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-block" v-if="doc.text">
          {{ doc.text }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "EducationPage",
    data() {
      return {
        header: 'Образование',
        docs: []
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    mounted() {
      this.getEducations();
    },
    methods: {
      getEducations() {
        axios.get('static/data/education.json?' + new Date().getTime())
          .then(response => {
            this.docs = response.data;
          }).then(() => {
            console.log(this.docs);
          $('.menu .item')
            .tab()
          ;
        });
      }
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
