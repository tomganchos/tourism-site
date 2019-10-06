<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="ui small header">Учреждение реализует дополнительные общеобразовательные программы,
        к которым не предъявлены требования ФГОС.</div>
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
