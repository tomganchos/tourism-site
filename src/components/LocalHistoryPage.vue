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
              <a class="header" href="https://drive.google.com/file/d/1ji8S6-IpRTWusjJmah4QOW6ar5Gtlt-2/view?usp=share_link" target="_blank" rel="noopener">Приказ конкурс Отечество 2021</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/11cwozC3bHZWG5ShIPWXRYF9hx9m3_qu2/view?usp=share_link" target="_blank" rel="noopener">Великая Отечественная война</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1U87gu18Ld6B2Jc-GFhulTRPRPy_T_PrH/view?usp=share_link" target="_blank" rel="noopener">Военная история</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1k1ethmY_prxB-Sy7YMsznNlbjN-eSgGQ/view?usp=share_link" target="_blank" rel="noopener">Культурное наследие</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1-kXGAtUubOwsL3hmibB2Ls-Tv2q6pgHe/view?usp=share_link" target="_blank" rel="noopener">Летопись. Литературное краеведение</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1s9EzJMVJ0RiEwP41glaeitJaa0CnKn7p/view?usp=share_link" target="_blank" rel="noopener">Охрана памятников Псковщины</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/14DIGldED37bRguD-UgWCg-ptvq6jgzrs/view?usp=share_link" target="_blank" rel="noopener">Православное краеведение</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/14nzgcRoKTF1bzju9DbJrhQi0dCAA1HB_/view?usp=share_link" target="_blank" rel="noopener">Родословие. Земляки</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1aou4TnH2XTv663G77vhvMm5zgBF08eJM/view?usp=share_link" target="_blank" rel="noopener">Экология</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1ADXVihsb8G-wJdrLoLlstTYHPvLF6HCc/view?usp=share_link" target="_blank" rel="noopener">Количество обучающихся , принявших участие в конкурсе Отечество</a>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1yBo82NCF-zstJTdGuiH7wK1JIm3UE-Km/view?usp=share_link" target="_blank" rel="noopener">ОТЕЧЕСТВО участие в мероприятиях</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalHistoryPage",
  data() {
    return {
      header: 'Краеведение',
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
