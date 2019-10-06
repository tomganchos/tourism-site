<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">
      <div class="ui secondary menu">
        <a class="item active" data-tab="administration">Администрация</a>
        <a class="item" data-tab="personal">Сотрудники</a>
<!--        <a class="item" data-tab="staff">Педагогический состав</a>-->
      </div>
      <div class="ui active tab" data-tab="administration">
        <div class="ui segment">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a924/mUEgdl61AXE.jpg">
          <div class="personal-name title">Григорьев Владимир Михайлович</div>
          <p class="personal-subtitle">Директор Центра. <span class="personal-tel">Тел. 57-60-84</span></p>
          <div>В.М.Григорьев окончил Ленинградский техникум физической культуры и спорта,
            Государственный институт физической культуры и спорта им. П.Ф.Лесгафта.
            Имеет звание мастера спорта по лыжным гонкам, инструктора пешеходного туризма
            и первый разряд по туризму, является экспертом-кинологом II категории по охотничьему собаководству.</div>
          <div class="ui accordion">
            <div class="title accordion-title">
              <i class="dropdown icon"></i>
              Подробнее
            </div>
            <div class="content accordion-content">
              <div class="transition hidden">
                <div class="text-block">Владимир Михайлович не только сохранил, но и приумножил богатые традиции Центра.
                  Благодаря его настойчивости и энергии Центр туризма переехал в новое здание,
                  располагает зданием общежития, где принимаются группы не только из области,
                  но и из других регионов России.</div>
                <div class="text-block">Ежегодно В.М.Григорьев организует поход по Кавказу с коллегами и студентами
                  Вузов. Пройдены все маршруты бывшего Советского Союза. Это и Карелия,
                  Урал, Туркмения, Байкал, Крым, Карпаты и др.</div>
                <div class="text-block">Под его руководством в течении 20 лет Центр проводит массовые мероприятия
                  областного и Российского уровня по туризму и краеведению. В 1996 г. успешно
                  проведены Всероссийские соревнования «Школа безопасности», в 2007 г. туристский
                  слет учащихся Союзного государства.</div>
                <div class="text-block">Хорошей традицией стали выездные семинары для работников дополнительного
                  образования по обмену опытом не только в различные регионы России,
                  но и в страны ближнего зарубежья.</div>
                <div class="text-block">Благодаря заслуге Владимира Михайловича на базе Центра 10 лет работает музей
                  истории народного образования, который является организационно-методическим
                  центром по работе с музеями учреждений образования.</div>
                <div class="text-block">В.М.Григорьев является автором учебно-методических пособий по
                  туристско-краеведческой деятельности. Его авторская образовательная
                  программа «Туризм – школа жизни» стала дипломантом VII Всероссийского конкурса
                  образовательных программ дополнительного образования детей.</div>
                <div class="text-block">В 1999 году ему присвоено звание «Заслуженный учитель» Российской
                  Федерации, а в 2008 году звание "Заслуженный путешественник России".</div>
              </div>
            </div>
          </div>
        </div>

        <div class="ui segment">
          <img class="ui medium left floated image" alt="photo"  src="https://pp.userapi.com/c836131/v836131908/2a90c/NzPJwnvY4sQ.jpg">
          <div class="personal-name title">Крючкова Татьяна Николаевна</div>
          <p class="personal-subtitle">Заместитель директора. <span class="personal-tel">Тел. 57-62-53</span></p>
          <div>Образование высшее, закончила Псковский Государственный педагогический институт им. С.М.Кирова.
            Работает в Псковском областном Центре детского и юношеского туризма и экскурсий с 2000 года.
            До 2005 г. - методистом отдела музейной работы, после реорганизации Центра - методистом отдела
            туризма и краеведения, затем заведующей отделом краеведения. С октября 2012 г. является
            заместителем директора Центра. </div>
          <div class="ui accordion">
            <div class="title accordion-title">
              <i class="dropdown icon"></i>
              Подробнее
            </div>
            <div class="content accordion-content">
              <div class="transition hidden">
                <div class="text-block">Награждена Грамотами Государственного управления образования Псковской области,
                  Грамотой Федерального центра детского и юношеского туризма и краеведения.
                  В 2007 г. объявлена Благодарность Министерства образования и науки Российской
                  Федерации, в 2012 г. награждена Почетной грамотой Министерства образования и науки,
                  в 2015 году медалью "Патриот России".
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 20px">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a7b2/nn8nOkr7c7o.jpg">
          <div class="personal-name title">Цапенко Екатерина Владимировна</div>
          <p class="personal-subtitle">Главный бухгалтер. <span class="personal-tel">Тел.57-62-53</span></p>
          <div>Окончила Славянский аграрный техникум по специальности бухучет и аудит,
            Сумской национальный аграрный университет по специальности экономист-бухгалтер, аудитор. </div>
          <div>В Центре детского туризма работает с января 2017 года</div>
        </div>
      </div>
      <div class="ui tab" data-tab="personal">
        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c626627/v626627908/6e001/Rkic5VrWIkI.jpg">
          <div class="personal-name title">Алешина Надежда Михайловна</div>
          <p class="personal-subtitle">Заведующая музеем истории народного образования. <span class="personal-tel">Тел. 56-00-76</span></p>
          <div>Окончила Псковский государственный педагогический институт им. Кирова.
            В Центре туризма работает с сентября 2014 года</div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a8ec/OEG4MuPZxDE.jpg">
          <div class="personal-name title">Баштырева Светлана Васильевна</div>
          <p class="personal-subtitle">Заведующая экскурсионным отделом. <span class="personal-tel">Тел. 57-62-54</span></p>
          <div>В 2012 году окончила филологический факультет Псковского Государственного университета.
            В Псковском областном Центре детского и юношеского туризма и экскурсий
            работает с декабря 2012 года.</div>
          <div>В 2016 г. награждена Почетной Грамотой Государственного управления образования Псковской области.
          </div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836130/v836130908/36185/wjt5nMBrNnw.jpg">
          <div class="personal-name title">Бойкова Ольга Викторовна</div>
          <p class="personal-subtitle">Заведующая отделом туризма. <span class="personal-tel">Тел. 57-26-52</span></p>
          <div>О.В.Бойкова закончила естественно-географический факультет Псковского Государственного
            педагогического института им.С.М.Кирова. Работает заведующей отделом по туризму в Псковском
            областном Центре детского и юношеского туризма и экскурсий с 2004 года.</div>
          <div>Награждена Грамотами Государственного управления образования Псковской области,
            Грамотой Главного управления МЧС России по Псковской области, Грамотами Федерального
            Центра детско-юношеского туризма и краеведения.</div>
          <div>В 2004 г. завоевала 2 место в областном конкурсе авторских
            образовательных программ дополнительного образования детей
            туристско-краеведческого направления.
          </div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c626627/v626627908/6e00b/GjRkI3kDwIE.jpg">
          <div class="personal-name">Ковалева Надежда Николаевна</div>
          <p class="personal-subtitle">Начальник отдела по АХЧ. <span class="personal-tel">Тел. 57-62-54</span></p>
          <div>Работает в Псковском областном Центре детского и юношеского туризма и экскурсий с января 2008 года.</div>
          <div>Награждена Грамотой Государственного управления образования Псковской области.
          </div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 15px">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a7c7/NdIAnjJvPsE.jpg">
          <div class="personal-name">Лукьянова Яна Юрьевна</div>
          <p class="personal-subtitle">Методист отдела туризма, педагог дополнительного образования. <span class="personal-tel">Тел. 57-26-52</span></p>
          <div>Является студенткой 4 курса Псковского Государственного университета, факультет технологии и дизайна. </div>
          <div>В центре детского туризма работает с сентября 2016 года.</div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 15px">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836130/v836130908/36199/CaRwW7jw5_I.jpg">
          <div class="personal-name">Передельская Елена Евгеньевна</div>
          <p class="personal-subtitle">Документовед. <span class="personal-tel">Тел. 57-60-84</span></p>
          <div>Окончила Псковский строительный колледж в 1996 г. , в 2010 г. окончила Псковский Государственный педагогический институт им. С.М.Кирова по специальности «Педагог-психолог».</div>
          <div>В Псковском областном Центре детского и юношеского туризма и экскурсий работает с апреля 2017 г.</div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a8e2/t7gbkrOKNKs.jpg">
          <div class="personal-name">Яковлева Светлана Михайловна</div>
          <p class="personal-subtitle">Заведующая отделом краеведения. <span class="personal-tel">Тел. 57-62-53</span></p>
          <div>Яковлева Светлана Михайловна работает в Псковском областном Центре
            детского и юношеского туризма и экскурсий с 2002 года. Образование высшее.</div>
          <div>Награждена Грамотами Государственного управления образования Псковской
            области, Федерального Центра детско-юношеского туризма и краеведения.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalPage",
    data() {
      return {
        header: 'Руководство. Педагогический (научно-педагогический) состав',
      }
    },
    beforeMount() {
      this.$emit('label', {
        label: this.header
      })
    },
    mounted() {
      $('.menu .item')
        .tab()
      ;
      $('.ui.accordion')
        .accordion()
      ;
    }
  }
</script>

<style scoped>
  @import "./../assets/css/common.css";

  .personal-tel {
    display: inline-flex;
  }
  .content.accordion-content {
    padding: 0 !important;
  }

</style>
