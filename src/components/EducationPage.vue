<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">
      <div class="ui secondary menu">
        <a class="item active" data-tab="information">Информация</a>
        <a class="item" data-tab="history">2015</a>
      </div>
      <div class="ui active tab segment" data-tab="information">
        <div class="title">Информация:</div>
        <div class="text-block">
          <div v-for="doc in docsCommon" style="margin-bottom: 10px; background-color: #0e8c8c">
            {{JSON.stringify(doc)}}
          </div>
          <div v-for="doc in docsByYear" style="margin-bottom: 10px; background-color: #8c3a2f">
            {{JSON.stringify(doc)}}
          </div>
        </div>
      </div>
      <div class="ui tab segment" data-tab="history">
        <div class="title">2015</div>
        <div class="text-block">
          28 декабря 1940 г. был издан приказ Народного Комиссара Просвещения,
          обязывающий все органы народного образования, директоров школ и домов пионеров
          обеспечить условия для развития детского туризма. В приказе предлагалось
          организовать массовые областные мероприятия (экскурсии, пешие и лыжные походы, конкурсы).
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
        docsByYear: {}
      }
    },
    created() {
      this.getDocs();
    },
    mounted() {
      $('.menu .item')
        .tab()
      ;
    },
    methods: {
      getDocs() {
        axios.get(host + '/docs?category=education')
          .then(response => {
            this.docs = response.data.map((item) => {
              if (item.year) {
                if (this.docsByYear[item.year]) {
                  this.docsByYear[item.year].push(item);
                } else {
                  this.docsByYear[item.year] = [];
                  this.docsByYear[item.year].push(item);
                }
              } else {
                this.docsCommon.push(item);
              }
              console.log(item);
              if (this.docs.length === 0) {
                this.textError = 'Документов нет'
              }
              return {
                name: item.name,
                link: item.link,
                category: item.category
              }
            })
          }).catch(err => {
          console.log(err);
          this.textError = 'Ошибка загрузки документов'
        });
      }
    }
  }
</script>

<style scoped>
  .ui.segment.head {
    margin-bottom: 5px;
  }
  .ui.segment .header {
    color: #204d74;
  }
  .ui.segment.body {
    margin-top: 0;
  }
  .ui.secondary.menu {
    margin-bottom: 5px;
  }
  .ui.tab.segment {
    margin-top: 5px;
  }
  div.text-block {
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 10px;
  }
  .title {
    margin-bottom: 5px;
    margin-top: 0;
    font-weight: bold;
  }
</style>
