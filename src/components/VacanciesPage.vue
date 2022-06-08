<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
<!--      <div class="ui small header">Вакантных мест для приема обучающихся в {{year}} году нет</div>-->
      <div><h2>Документы:</h2></div>
      <div class="ui relaxed divided list">
        <div class="item">
          <div class="item-icon">
            <i class="file alternate outline icon"/>
          </div>
          <div class="content">
            <a class="header" href="https://docs.google.com/document/d/1Nzc76wINr2jCexybDlZJh7PCbR5a6if0/edit?usp=sharing&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Вакантные места на 2021-2022 год</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VacanciesPage",
    data() {
      return {
        header: 'Вакантные места для приема (перевода) обучающихся',
        year: '____ - ____'
      }
    },
    created() {
      this.setYears();
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    methods: {
      setYears() {
        let thisYear = new Date();
        if (thisYear.getMonth() >= 8) {
          this.year = thisYear.getFullYear() + '-' + (thisYear.getFullYear() + 1);
        } else {
          this.year = (thisYear.getFullYear() -1 ) + '-' + thisYear.getFullYear();
        }
      }
    }
  }
</script>


<style scoped>
  @import "./../assets/css/common.css";
  .ui.segment.head {
    margin-bottom: 5px;
  }
  .ui.segment .header {
    color: #204d74;
  }
  .ui.segment.body {
    margin-top: 0;
  }
</style>
