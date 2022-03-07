<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>
    <div id="context">
      <div class="ui secondary menu">
        <a class="item active" data-tab="administration">Администрация</a>
        <a class="item" data-tab="personal">Сотрудники</a>
        <a class="item" data-tab="staff">Педагогический состав</a>
      </div>
      <div class="ui active tab" data-tab="administration">
        <div class="ui segment">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/13.jpg">
          <div class="personal-name title">Прокофьев Игорь Владимирович</div>
          <p class="personal-subtitle">и. о. директора. <span class="personal-tel">Тел. 57-60-84</span></p>
          <div>Образование высшее. Окончил Псковский государственный педагогический институт им. С. М. Кирова.
            Работал учителем географии и биологии в образовательных учреждениях, ведущим специалистом,
            советником заместителя губернатора в Администрации Псковской области, начальником управления
            образования города Пскова, заместителем начальника Комитета по образованию Псковской области.</div>
          <div class="text-block">С октября 2021 года работает в Псковском областном Центре
            детского и юношеского туризма и экскурсий.</div>
        </div>

        <div class="ui segment">
          <img class="ui medium left floated image" alt="photo"  src="/static/images/personal/2.jpg">
          <div class="personal-name title">Крючкова Татьяна Николаевна</div>
          <p class="personal-subtitle">Заместитель директора Центра. <span class="personal-tel">Тел. 57-62-53 </span>
            <span class="personal-tel">org608@pskovedu.ru</span>
          </p>
          <div>Образование высшее, закончила Псковский Государственный педагогический институт им. С.М.Кирова.
            Работает в Псковском областном Центре детского и юношеского туризма и экскурсий с 2000 года.
            До 2005 г. - методистом отдела музейной работы, после реорганизации Центра - методистом отдела
            туризма и краеведения, затем заведующей отделом краеведения. С октября 2012 г. является
            заместителем директора Центра. </div>
          <div class="ui accordion">
            <div class="title accordion-title">
              <i class="dropdown icon"/>
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
                <div class="text-block">В 2018 году присвоено почетное звание «Почетный работник сферы образования
                  Российской Федерации»
                </div>
                <div class="text-block">В 2019 году награждена Благодарственными письмами от губернатора Псковской области
                  М.Ю.Ведерникова за большой вклад в подготовку, организацию и проведение 22 межрегиональных соревнований
                  по Северо-Западному федеральному округу «Школа безопасности», а также за активное участие в подготовке
                  и проведении мероприятий, посвященных 74-й годовщине Победы в Великой Отечественной войне 1941-1945 г.г.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 20px">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/3.jpg">
          <div class="personal-name title">Цапенко Екатерина Владимировна</div>
          <p class="personal-subtitle">Главный бухгалтер. <span class="personal-tel">Тел.57-62-53 </span>
            <span class="personal-tel">org608@pskovedu.ru</span>
          </p>
          <div class="text-block">Окончила Славянский аграрный техникум по специальности бухучет и аудит,
            Сумской национальный аграрный университет по специальности экономист-бухгалтер, аудитор. </div>
          <div class="text-block">В Центре детского туризма работает с января 2017 года</div>
        </div>
      </div>
      <div class="ui tab" data-tab="personal">
        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/14.jpg">
          <div class="personal-name title">Байкова Ольга Владимировна</div>
          <p class="personal-subtitle">Старший инструктор-методист Музея истории народного образования Псковской
            области. <span class="personal-tel">Тел. 56-00-76, org608@pskovedu.ru</span></p>
          <div class="text-block">В 2019 году окончила Псковский государственный университет по направлению
            Психолого-педагогическое образование.</div>
          <div class="text-block">В 2021 году присвоена степень магистра педагогического образования,
            профиль "Образовательный менеджмент".</div>
          <div class="text-block">В Псковском областном Центре детского и юношеского туризма и экскурсий
            работает с октября 2021 года.</div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/4.jpg">
          <div class="personal-name title">Лебедева Светлана Васильевна</div>
          <p class="personal-subtitle">Старший инструктор-методист экскурсионного отдела, педагог дополнительного образования. <span class="personal-tel">Тел. 57-62-54</span></p>
          <div class="text-block">В 2012 году окончила филологический факультет Псковского Государственного университета.
            В Псковском областном Центре детского и юношеского туризма и экскурсий
            работает с декабря 2012 года.</div>
          <div class="text-block">В 2016 г. награждена Почетной Грамотой Государственного управления образования
            Псковской области.
          </div>
          <div class="text-block">В 2019 году награждена Благодарственным письмом от губернатора Псковской области
            М.Ю.Ведерникова за активное участие в подготовке и проведении мероприятий, посвященных 74-й годовщине
            Победы в Великой Отечественной войне 1941-1945 г.г.
          </div>
          <div class="text-block">В 2019 году награждена Благодарственным письмом Председателя Комитета по образованию
            Псковской области А.В.Седунова за помощь в организации и проведении «Императорского маршрута».
          </div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/6.jpg">
          <div class="personal-name title">Бойкова Ольга Викторовна</div>
          <p class="personal-subtitle">Старший инструктор-методист отдела туризма, педагог дополнительного образования. <span class="personal-tel">Тел. 57-26-52</span></p>
          <div class="text-block">О.В.Бойкова закончила естественно-географический факультет Псковского Государственного
            педагогического института им.С.М.Кирова. Работает заведующей отделом по туризму в Псковском
            областном Центре детского и юношеского туризма и экскурсий с 2004 года.</div>
          <div class="text-block">Награждена Грамотами Государственного управления образования Псковской области,
            Грамотой Главного управления МЧС России по Псковской области, Грамотами Федерального
            Центра детско-юношеского туризма и краеведения.</div>
          <div class="text-block">В 2004 г. завоевала 2 место в областном конкурсе авторских
            образовательных программ дополнительного образования детей
            туристско-краеведческого направления.
          </div>
          <div class="text-block">В 2019 году награждена Благодарственным письмом от губернатора Псковской
            области М.Ю.Ведерникова за большой вклад в подготовку, организацию и проведение 22 межрегиональных
            соревнований по Северо-Западному федеральному округу «Школа безопасности».
          </div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/9.jpg">
          <div class="personal-name title">Иманова Яна Алексеевна</div>
          <p class="personal-subtitle">Инструктор-методист музея истории народного образования Псковской области, педагог дополнительного образования. <span class="personal-tel">Тел. 56-00-76</span></p>
          <div class="text-block">Окончила Псковский Государственный институт им. С.М.Кирова.</div>
          <div class="text-block">Работает в Центре детского туризма с апреля 2018 г.</div>
          <div class="text-block">В 2019 году награждена Благодарственными письмами от губернатора Псковской области М.Ю.
            Ведерникова:<br>- за активное участие в подготовке и проведении мероприятий, посвященных 74-й годовщине
            Победы в Великой Отечественной войне 1941-1945 г.г.,<br>- за развитие и укрепление русско-ганзейских
            отношений и участие в XXXIX Международных Ганзейских днях Нового времени в городе Пскове.
          </div>
          <div class="text-block">В 2019 году награждена Благодарственным письмом от Главы Администрации города
            Пскова А.Н.Братчикова за активное участие в подготовке и проведении XXXIX Международных Ганзейских
            дней Нового времени в городе Пскове в период с 27 по 30 июня 2019 года.
          </div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/trips/0.jpg">
          <div class="personal-name title">Иванова Елена Николаевна</div>
          <p class="personal-subtitle">Бухгалтер. <span class="personal-tel">Тел. 57-62-53</span></p>
          <div class="text-block">Окончила Санкт-Петербургский Государственный технический университет.</div>
          <div class="text-block">В Центре туризма работает с июля 2018 г.</div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/11.jpg">
          <div class="personal-name title">Ковалева Надежда Николаевна</div>
          <p class="personal-subtitle">Начальник отдела по АХЧ. <span class="personal-tel">Тел. 57-62-54</span></p>
          <div class="text-block">Работает в Псковском областном Центре детского и юношеского туризма и экскурсий с января 2008 года.</div>
          <div class="text-block">Награждена Грамотой Государственного управления образования Псковской области.
          </div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 15px">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/8.jpg">
          <div class="personal-name title">Лукьянова Яна Юрьевна</div>
          <p class="personal-subtitle">Педагог дополнительного образования. <span class="personal-tel">Тел. 57-26-52</span></p>
          <div class="text-block">Окончила Псковского Государственного университета, факультет технологии и дизайна в 2018г.</div>
          <div class="text-block">В центре детского туризма работает с сентября 2016 года.</div>
        </div>

        <div class="ui segment" style="overflow: auto; margin-bottom: 15px">
          <img class="ui medium left floated image" alt="photo" src="/static/images/personal/10.jpg">
          <div class="personal-name title">Передельская Елена Евгеньевна</div>
          <p class="personal-subtitle">Документовед. <span class="personal-tel">Тел. 57-60-84</span></p>
          <div class="text-block">Окончила Псковский строительный колледж в 1996 г. , в 2010 г. окончила Псковский Государственный педагогический институт им. С.М.Кирова по специальности «Педагог-психолог».</div>
          <div class="text-block">В Псковском областном Центре детского и юношеского туризма и экскурсий работает с апреля 2017 г.</div>
        </div>

        <div class="ui segment" style="overflow: auto">
          <img class="ui medium left floated image" alt="photo" src="https://pp.userapi.com/c836131/v836131908/2a8e2/t7gbkrOKNKs.jpg">
          <div class="personal-name title">Петрова Светлана Михайловна</div>
          <p class="personal-subtitle">Заведующая отделом краеведения. <span class="personal-tel">Тел. 57-62-53</span></p>
          <div class="text-block">Петрова Светлана Михайловна работает в Псковском областном Центре
            детского и юношеского туризма и экскурсий с 2002 года. Образование высшее.</div>
          <div class="text-block">Награждена Грамотами Государственного управления образования Псковской
            области, Федерального Центра детско-юношеского туризма и краеведения.
          </div>
        </div>
      </div>

      <div class="ui tab" data-tab="staff">
        <div class="ui segment body">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"/>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1b6qjhhJPxkJDkShfU48wPRmMov0JP4ua/view?usp=sharing" target="_blank" rel="noopener">Педагогический состав на 01.05.2020</a>
            </div>
          </div>
          <div class="item" style="margin-top: 8px;">
            <div class="item-icon">
              <i class="file alternate outline icon"/>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/1cTEHHePeD0IbIBTUVbccJT3ppRFO0T15/view?usp=sharing" target="_blank" rel="noopener">Педагогический состав на 01.01.2021</a>
            </div>
          </div>
          <div class="item" style="margin-top: 8px;">
            <div class="item-icon">
              <i class="file alternate outline icon"/>
            </div>
            <div class="content">
              <a class="header" href="https://docs.google.com/document/d/1MKNZXW4RLNg5okokJB91TKpYzAXUWjMG/edit?usp=sharing&ouid=117737652311635922254&rtpof=true&sd=true" target="_blank" rel="noopener">Педагогический состав на 01.01.2022</a>
            </div>
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
