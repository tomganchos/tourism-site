<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <h2>Государственное бюджетное образовательное учреждение дополнительного образования Псковской области «Центр детского и юношеского туризма и экскурсий»</h2>
      </div>
      <div class="text-block">
        <h3>Почтовый адрес: </h3><span>ул.Народная 53Б, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Фактический адрес: </h3><span>ул.Народная 53Б, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Телефон для справок: </h3><a href="tel:88112576084" data-rel="external">8 (8112) 57-60-84</a>, <a href="tel:88112576253" data-rel="external">8 (8112) 57-62-53</a>
      </div>
      <div class="text-block">
        <h3>Факт: </h3><a href="tel:88112576084" data-rel="external">8 (8112) 57-60-84</a>
      </div>
      <div class="text-block">
        <h3>Электронная почта: </h3><a href="mailto:org608@pskovedu.ru">org608@pskovedu.ru</a>
      </div>
      <div class="text-block">
        <h3>И.о.директора: </h3><span>Прокофьев Игорь Владимирович, <a href="tel:88112576084">8 (8112) 57-60-84</a></span>
      </div>
      <div class="text-block">
        <div><h2>Документы:</h2></div>

        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1a7Mo659Pce8tZrAmxFej18RjQOgLNqCU/edit?usp=sharing&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Структура и органы управления образовательной организацией</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1CLL9r-ghwR8w4jWQQqUD0REFI8Jt13p_/view?usp=sharing" target="_blank" rel="noopener">Положение о методическом совете</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1eIWfHtfVUP8BNKBay2Ac7dnW90wydtR-/view?usp=sharing" target="_blank" rel="noopener">Положение о совете учреждения</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1g_gXruGbnjhl7JSW0Hrj11NW3d4rFJCq/view?usp=sharing" target="_blank" rel="noopener">Положение об общем собрании работников</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "StructurePage",
      data() {
        return {
          header: 'Структура и органы управления образовательной организацией',
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

  .text-block {
    margin-bottom: 5px !important;
  }
  .text-block:last-child {
    margin-top: 15px !important;
  }
  h2:first-child {
    margin-bottom: 10px;
  }
</style>
