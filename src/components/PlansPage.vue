<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">

      <div class="ui secondary menu">
        <a v-for="(plan, index) in plans.slice().reverse()"
           class="item"
           :class="index === 0 ? 'active' : ''"
           :data-tab="plan.year">{{plan.year}}</a>
      </div>
      <div v-for="(plan, index) in plans.slice().reverse()"
           class="ui tab segment"
           :class="index === 0 ? 'active' : ''"
           :data-tab="plan.year">
        <div class="text-block">
          <div><h2>Документы:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item" v-for="doc in plan.docs" v-if="!doc.month">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header"
                   :href="doc.link"
                   target="_blank" rel="noopener">{{doc.name}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-block" v-if="plan.docs.filter(doc => doc.month).length > 0">
          <div><h2>Планы по месяцам:</h2></div>
          <div class="ui relaxed divided list">
            <div class="item" v-for="doc in plan.docs" v-if="doc.month">
              <div class="item-icon">
                <i class="file alternate outline icon"></i>
              </div>
              <div class="content">
                <a class="header"
                   :href="doc.link"
                   target="_blank" rel="noopener">{{doc.name}}</a>
              </div>
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
    name: "PlansPage",
    data() {
      return {
        header: 'Планы работы Центра',
        plans: []
      }
    },
    created() {
      this.getPlans();
    },
    mounted() {
      this.$emit('label', {
        label: this.header
      });
    },
    methods: {
      getPlans() {
        axios.get('static/data/plans.json?' + new Date().getTime())
          .then(response => {
            this.plans = response.data.map(item => {
              return {
                year: item.year,
                docs: item.docs
              }
            })
          }).then(() => {
          $('.menu .item')
            .tab()
          ;
          }
        );
        console.log(this.plans);
      }

    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";
  h3 {
    margin-bottom: 10px;
  }
  .title {
    margin-bottom: 5px;
    margin-top: 0;
    font-weight: bold;
  }
  .item a {
    line-height: 1.3;
  }
  .item {
    display: flex !important;
  }
  .item-icon {
    display: flex;
    align-items: center;
  }
  .item-icon i {
    margin-right: 10px;
  }
  .item .content {
    display: flex;
  }
  .ui.list {
    margin: 10px 0;
  }
  .ui.secondary.menu {
    overflow-x: auto;
  }
</style>
