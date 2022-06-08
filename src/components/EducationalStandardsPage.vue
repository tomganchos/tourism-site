<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="ui small header">В соответствии с Федеральным законом от 29 декабря 2012 г.
        №273-ФЗ «Об образовании в Российской Федерации» Федеральные государственные образовательные стандарты и
        федеральные государственные требования не распространяют свое действие на реализацию дополнительных общеобразовательных общеразвивающих программ.</div>

      <div class="ui relaxed divided list">
        <div class="item">
          <div class="item-icon">
            <i class="file alternate outline icon"/>
          </div>
          <div class="content">
            <a class="header" href="http://pskov-raduga.ru/docs-new/prikaz_minprosveshhenija_rossii_ot_09_11_2018_n_19.pdf" target="_blank" rel="noopener">
              ПРИКАЗ Минпросвещения России от 09.11.2018 N 196 "ОБ УТВЕРЖДЕНИИ ПОРЯДКА ОРГАНИЗАЦИИ И ОСУЩЕСТВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ ПО ДОПОЛНИТЕЛЬНЫМ ОБЩЕОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ" (Зарегистрировано в Минюсте РФ 29.11.2018 N 52831,редакция от 30.09.2020)
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EducationalStandardsPage",
    data() {
      return {
        header: 'Образовательные стандарты',
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
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
