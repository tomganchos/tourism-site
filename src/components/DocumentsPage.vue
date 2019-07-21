<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <div><h2>Основные документы:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in common">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Планы финансово-хозяйственной деятельности:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in finance">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Отчёты о результатах самообследования:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in self">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Документы о порядке оказания платных образовательных услуг:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in paid">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчеты об исполнении предписаний:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in control">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Государственное задание:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in government">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Паспорта:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in passport">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-block">
        <div><h2>Локальные нормативные акты по основным вопросам организации и осуществления образовательной деятельности:</h2></div>
        <div class="ui relaxed divided list">
          <div class="item" v-for="item in act">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "DocumentsPage",
    data() {
      return {
        header: 'Документы Центра',
        docs: []
      }
    },
    computed: {
      common() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'common') {
            return doc;
          }
        })
      },
      finance() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'finance') {
            return doc;
          }
        })
      },
      self() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'self') {
            return doc;
          }
        })
      },
      paid() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'paid') {
            return doc;
          }
        })
      },
      control() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'control') {
            return doc;
          }
        })
      },
      government() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'government') {
            return doc;
          }
        })
      },
      passport() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'passport') {
            return doc;
          }
        })
      },
      act() {
        console.log(this.docs);
        return this.docs.filter((doc) => {
          if (doc.page === 'documents' && doc.category === 'act') {
            return doc;
          }
        })
      },
      computedDocs() {
        let obj = [];
        this.docs.filter((doc) => {
          if (doc.page === 'documents') {
            obj[doc.category] = doc
          }
          return obj;
        })
      }
    },
    mounted() {
      this.getDocs();
    },
    methods: {
      getDocs() {
        axios.get('static/data/docs.json')
          .then(response => {
            this.docs = response.data.map((item) => {
              return {
                name: item.name,
                link: item.link,
                page: item.page,
                category: item.category,
              }
            })
          });
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
</style>
