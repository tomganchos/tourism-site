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
              <a class="header" href="https://drive.google.com/file/d/1YnZx8exJ7_OpbHP-ZnxtwT8NReOc-gYd/view?usp=sharing" target="_blank" rel="noopener">Экскурсии</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1Bk0i0-tUxzKaQqszkF12K2YWMFyvhPMi/view?usp=share_link" target="_blank" rel="noopener">Координатор школьных музеев</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1vzIwvIibh-CrNUn8MM6sbkbEZQS-ACMu/view?usp=share_link" target="_blank" rel="noopener">Федеральный закон о музейном фонде</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1vbKhgk7u1XprmiPypKuRoLd-HMnJvWFE/view?usp=share_link" target="_blank" rel="noopener">Методические рекомендации о создании школьного музея</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1sKdckv60WCLLbvzqfj-RYMolcP1C4_YK/view?usp=share_link" target="_blank" rel="noopener">Методические рекомендации при проведении экскурсий</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1IPALLFTg2e1KbuGVCxlzKjkx8m3pMR5y/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Фондовая работа в школьном музее</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1IPALLFTg2e1KbuGVCxlzKjkx8m3pMR5y/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Фондовая работа в школьном музее</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1BgElyhiB9i7ElJcF-bufei9qNc5ub3v7/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Учёт фондов</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1mljCqr3Ge1X33CkNHBJ-aGAeDxXkyJzO/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Паспортизация. Акт обследования</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/spreadsheets/d/1YONOCJ2bWWY3OEpyenmJrq7xWO5f-WgG/edit?usp=share_link&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Паспортизация. Учетная карточка</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1ql228BcDtPZ7MGMKFpemUv1uzKbNwHxv/view?usp=share_link" target="_blank" rel="noopener">Практики по организации  деятельности школьных музеев</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MuseumAboutEducationPage",
    data() {
      return {
        header: 'Музей истории народного образования Псковской области',
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
</style>
