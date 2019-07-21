<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div class="ui segment body">
      <div class="text-block">
        <h2>Телефон доверия по противодействию коррупции:<br>
          <a href="tel:88001006011" data-rel="external">8-800-100-60-11</a>
        </h2>
      </div>

      <div class="text-block">
        <div><h2>Документы:</h2></div>

        <div class="ui relaxed divided list">
          <div class="item" v-for="doc in docs">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" :href="doc.link" target="_blank" rel="noopener">{{doc.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "AntiCorruptionPage",
    data() {
      return {
        header: 'Противодействие коррупции',
        docs: [
          {
            'name': 'Буклет. Коррупция вчера сегодня завтра',
            'link': 'https://drive.google.com/file/d/1Qmwr6Am3aTupuIWLRamxOmCBO2QwThdu/view?usp=sharing'
          },
          {
            'name': 'Буклет. Эстафета добрых дел',
            'link': 'https://drive.google.com/file/d/1qQo_feZyqv0Go04Q8Q8RdJwn_3_lhtp2/view?usp=sharing'
          },
          {
            'name': 'Памятка',
            'link': 'https://drive.google.com/file/d/1MVGODNiRozQhy_OXWhotdIKVhNLkjmbB/view?usp=sharing'
          },
          {
            'name': 'Памятка. Образование',
            'link': 'https://drive.google.com/file/d/1DGwm2JA8nhLnVQ5sc2wu4AGrYHjdORHH/view?usp=sharing'
          },
          {
            'name': 'Беседа Стоп коррупции',
            'link': 'https://drive.google.com/file/d/1GI77ZdKcnQIqJRcpUS_0zCq3SP1oXYOF/view?usp=sharing'
          },
          {
            'name': 'Письмо в УЭБ',
            'link': 'https://drive.google.com/file/d/1jFfo3pXGfGkEw6zbTS3KPPgG4Q3ku4Ul/view?usp=sharing'
          },
          {
            'name': 'План работы',
            'link': 'https://drive.google.com/file/d/1DArGWFWsVzdUAS18Q8wMExxojXJgGmpd/view?usp=sharing'
          },
          {
            'name': 'Памятка родителям по антикоррупции',
            'link': 'https://drive.google.com/file/d/19UvSS-IA3IwUWVK6DYBmWjIKHNXAQqXT/view?usp=sharing'
          },
          {
            'name': 'Положение о противодействии коррупции ГБОУ ДО Псковский областной Центр детского и юношеского туризма и экскурсий',
            'link': 'https://drive.google.com/file/d/1u16glThPsFNcr1wS7826Duzys1SlJKGp/view?usp=sharing'
          },
          {
            'name': 'Отчёт о проделанной работе',
            'link': 'https://drive.google.com/file/d/1Xa0HEbN4-RxUujE9RXXO_txH6JySdugt/view?usp=sharing'
          },
          {
            'name': 'План мероприятий по противодействию коррупции на 2017-2018',
            'link': 'https://drive.google.com/file/d/1MvBbhDrxX0KjMMBE13h9ik8zm_EAL9yQ/view?usp=sharing'
          },
          {
            'name': 'О создании комиссии по урегулированию споров',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjZVhNWVd4T1ZselE/view?usp=sharing'
          },
          {
            'name': 'Кодекс профессиональной этики педагогических работников',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjdWZjbDNfTnUyQTA/view?usp=sharing'
          },
          {
            'name': 'План по противодействию коррупции на 2016-2017',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjNDFQWjdoems3Vjg/view?usp=sharing'
          },
          {
            'name': 'Приказ 1-28',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjTHpPQkw2RkV3OEE/view?usp=sharing'
          },
          {
            'name': 'Федеральный закон - 273',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjVGRScFFSZTlYT2M/view?usp=sharing'
          },
          {
            'name': 'Антикоррупционный план и приказ',
            'link': 'https://drive.google.com/file/d/0B4Y-eduzf4rjQjJNcF9MaWFTSFU/view?usp=sharing'
          }
        ]
      }
    },
    mounted() {
      this.docs.reverse();

    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";

  .text-block {
    margin-bottom: 15px !important;
  }
</style>
