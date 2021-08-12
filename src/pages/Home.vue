<template>
  <main class="main">
    <section class="wrapper-content">
      <div
        class="intro"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/intro/bg.png') + ')',
        }"
      >
        <!-- <img src="@/assets/img/intro/bg.png" alt="" /> -->
        <header class="intro__header header text-center">
          <h1 class="header__title text-lg color-secondary text-light">
            Лучшие астрологи и экстрасенсы Румынии
          </h1>
          <h2 class="header__subtitle color-secondary title-lg text-light">
            Точность прогноза: 97%
          </h2>
        </header>
        <div
          class="intro__img"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/intro/void.svg') + ')',
          }"
        >
          <img src="@/assets/img/intro/1.png" class="intro__img-item" />
        </div>
        <div class="intro__info text-center">
          <h2 class="intro__info-title color-primary text-xl">
            Вас беспокоит вопрос о том,
          </h2>
          <h3 class="intro__info-subtitle color-primary text-xl tt-uppercase">
            когда Вы покинете этот Мир и при каких обстоятельствах?
          </h3>
        </div>
        <div class="intro__actions text-center">
          <router-link
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn-primary--yes
            "
            to="qwiz"
          >
            <span> Да</span>
          </router-link>
          <router-link
            to="qwiz"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn-primary--end
            "
          >
            <span> Нет</span>
          </router-link>
        </div>
        <p class="intro__descr text-light color-secondary text-center text-lg">
          Онлайн предсказание
        </p>
      </div>
    </section>
    <section class="wrapper-content">
      <div class="infos">
        <div class="infos__img">
          <img src="@/assets/img/infos/1.png" class="infos__img-item" />
        </div>
        <div class="infos__content">
          <p class="text-xl text-center">
            Позвольте нам раскрыть эту волнующую тайну и
            <span class="color-primary text-xls">
              с точностью определить дату и время вашей смерти,</span
            >
            а также предшествующую этому событию причину
          </p>
        </div>
      </div>
    </section>
    <section class="wrapper-content wrapper-content--mb-130">
      <div class="container">
        <div
          class="about"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/about/fon.jpg') + ')',
          }"
        >
          <p class="about__txt text-xls text-center">
            Многие не верят предсказаниям и мы решили доказать каждому,
            <span class="color-primary text-xl"
              >что прогноз может изменить жизнь любого человека!</span
            >
          </p>
        </div>
      </div>
    </section>

    <section class="wrapper-content">
      <div class="intro">
        <div class="intro__info text-center">
          <h2 class="intro__info-title color-primary text-xl">
            Боитесь ли вы умереть?
          </h2>
        </div>
        <div class="intro__actions text-center">
          <router-link
            to="qwiz"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn-primary--start
            "
          >
            <span> Да</span>
          </router-link>
          <router-link
            to="qwiz"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn-primary--end
            "
          >
            <span> Нет</span>
          </router-link>
        </div>
        <p class="intro__descr text-light color-secondary text-center">
          Вопрос 1-5
        </p>
      </div>
    </section>
    <section class="wrapper-content wrapper-content--mt-100">
      <footer class="footer">
        <div class="footer__symbol">
          <img
            src="@/assets/img/footer/1.svg"
            alt="ПРСМ - латынь"
            class="footer__symbol-img"
          />
        </div>
        <div class="footer__info">
          <p class="footer__info-txt bad-script text-center text-xl">
            Вы, конечно, умрете.<br />
            И все, с кем вы знакомы,<br />
            тоже однажды умрут.
          </p>
        </div>
        <div class="footer__symbol">
          <img
            src="@/assets/img/footer/2.svg"
            alt="ПРСМ - латынь"
            class="footer__symbol-img"
          />
        </div>
        <p class="footer__other text-xxs color-gray tt-upercase text-center">
          TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
          FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI
        </p>
      </footer>
    </section>
    <div class="icons-fon">
      <img
        src="@/assets/img/svg/earth.svg"
        class="icons-fon__item icons-fon__item--earth"
      />
      <img
        src="@/assets/img/svg/eye.svg"
        class="icons-fon__item icons-fon__item--eye"
      />
    </div>
  </main>
</template>
