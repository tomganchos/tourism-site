<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <div><h2>Документы:</h2></div>

        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1pNPqcyPdqjzaY4Xri6vA2bKLYMUzHgv6/view?usp=sharing" target="_blank" rel="noopener">Туристские маршруты по Псковской области</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/18A7WVtSrGjqJaT3_tldYViqaUn6E0OYB/view?usp=sharing" target="_blank" rel="noopener">Список рекомендуемых маршрутов</a>
            </div>
          </div>

          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1XV3I10kNcf9NsDd9TnU3tjUlJAdoiF-P/view?usp=share_link" target="_blank" rel="noopener">Протокол согласования прлномочий МКК</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1b-h8JvrAd9n-WeZX_VZ0nfwneUrqkhEb/view?usp=share_link" target="_blank" rel="noopener">Методические рекомендации по организации МКК и метод.сопровождения мероприятий с детьм в условиях природной среды</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/10sqEtDp1aAK548a2kWJoj2eh6YyHgm4X/view?usp=share_link" target="_blank" rel="noopener">Разъяснения по туристским терминам</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1wKg6SoZqUPc7QfTn-4xNxAU0Ih42sCaF/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Методические рекомендации по организации и проведению туристских походов,Москва, 2015</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1_9_Y3ZCcaVLVXJD0LU7kCZYEnz_AR9-K/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Постановление №252 от 03.03.2017 г. о безопасности туризма</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1GcTdcMlBPtOLzxgfIuMm2nLJDRUpDj_n/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Реестр инструкторов детского туризма</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1bfb2IfZeZXLN_Hb1A3BXP1HsB-2FVKuz/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Информация о кружках и клубах</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1wctaQZIS1XcUPzoHIcF9mvl0yYyUOfiF/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Информация о походах в 2022 году</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TouristRoutesPage",
      data() {
        return {
          header: 'Туристические маршруты',
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
  .text-block:last-child {
    margin-bottom: 0;
  }
</style>
