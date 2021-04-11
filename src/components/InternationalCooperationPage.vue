<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">

    </div>
  </div>
</template>

<script>
export default {
  name: "InternationalCooperationPage",
  data() {
    return {
      header: 'Международное сотрудничество',
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
