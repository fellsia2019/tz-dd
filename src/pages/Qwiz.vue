<template>
  <main
    class="qwiz"
    :class="{
      'qwiz-center':
        counter >= maxCount || counter == 'end' || counter == 'voice-mess',
    }"
  >
    <!-- qwiz question Second -->
    <div class="qwiz-header" v-if="counter == 2">
      <h2
        class="
          qwiz-header__title
          color-secondary
          text-xl
          bad-script
          text-center
        "
      >
        Мы расскажем Вам не только подробности вашей смерти, но также поможем
        Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
      </h2>
    </div>
    <div class="qwiz-content" v-if="counter == 2">
      <div class="intro">
        <div class="intro__info text-center">
          <h3 class="intro__info-title color-primary text-xl tt-upercase">
            Когда Вы чувствуете себя наиболее комфортно?
          </h3>
        </div>
        <div class="intro__actions text-center">
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--start
            "
            @click="nextQwiz"
          >
            <span> Утро</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--after-start
            "
            @click="nextQwiz"
          >
            <span> День</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--before-end
            "
            @click="nextQwiz"
          >
            <span> Вечер</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--end
            "
            @click="nextQwiz"
          >
            <span> Ночь</span>
          </button>
        </div>
      </div>
    </div>

    <!-- qwiz question Third -->
    <div class="qwiz-header" v-if="counter == 3">
      <h2
        class="
          qwiz-header__title
          color-secondary
          text-xl
          bad-script
          text-center
        "
      >
        Уже совсем скоро Вы узнаете много интересного о своем будущем!
      </h2>
    </div>
    <div class="qwiz-content" v-if="counter == 3">
      <div class="intro">
        <div class="intro__info text-center">
          <h3 class="intro__info-title color-primary text-xl tt-upercase">
            Укажите свою дату рождения:
          </h3>
        </div>
        <div class="intro__actions text-center">
          <div
            class="intro__actions-select select"
            :class="{ 'select--error': validate.errorDay }"
          >
            <v-select
              placeholder="День"
              ref="day"
              :options="days"
              v-model="selectedDay"
            ></v-select>
          </div>
          <div
            class="intro__actions-select select"
            :class="{ 'select--error': validate.errorMonth }"
          >
            <v-select
              placeholder="Месяц"
              ref="month"
              @input="createDatePicker"
              :options="months"
              v-model="selectedMonth"
            >
            </v-select>
          </div>
          <div
            class="intro__actions-select select"
            :class="{ 'select--error': validate.errorYear }"
          >
            <v-select
              placeholder="Год"
              ref="year"
              :options="years"
              v-model="selectedYear"
            >
            </v-select>
          </div>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--end
            "
            @click="
              loaderEnable()
              getFullYear()
            "
          >
            <span> Далее</span>
          </button>
        </div>
      </div>
    </div>

    <!-- qwiz question Fourth -->
    <div class="qwiz-header" v-if="counter == 4">
      <h2
        class="
          qwiz-header__title
          color-secondary
          text-xl
          bad-script
          text-center
        "
      >
        Смерть родного человека – одно из тяжелейших испытаний в жизни каждого
        из нас!
      </h2>
    </div>
    <div class="qwiz-content" v-if="counter == 4">
      <div class="intro">
        <div class="intro__info text-center">
          <h3 class="intro__info-title color-primary text-xl tt-upercase">
            Снятся ли Вам умершие люди?
          </h3>
        </div>
        <div class="intro__actions text-center">
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--start
            "
            @click="nextQwiz"
          >
            <span> Да</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--after-start
            "
            @click="nextQwiz"
          >
            <span> Нет</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--before-end
            "
            @click="nextQwiz"
          >
            <span> Иногда</span>
          </button>
        </div>
      </div>
    </div>

    <!-- qwiz question Fifth -->
    <div class="qwiz-header" v-if="counter == 5">
      <h2 class="color-secondary text-xl bad-script text-center qwiz-infos">
        <span v-if="fullAge <= 35">
          По вам скучает очень близкий человек, которого больше нет в мире
          живых.
        </span>
        <span v-if="fullAge >= 36 && fullAge <= 45">
          По вам скучает очень близкий человек, которого больше нет в мире
          живых. <br />Возможно это дедушка или бабушка.
        </span>
        <span v-if="fullAge >= 46">
          По вам скучает очень близкий человек, которого больше нет в мире
          живых. <br />Возможно это кто-то из Ваших родителей.
        </span>
      </h2>
    </div>
    <div class="qwiz-content" v-if="counter == 5">
      <div class="intro">
        <div class="intro__info text-center">
          <h3 class="intro__info-title color-primary text-xl tt-upercase">
            Запись, которую Вы услышите, может шокировать людей с неокрепшей
            психикой. Вы готовы узнать, что ждет именно Вас?
          </h3>
        </div>
        <div class="intro__actions text-center">
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--start
            "
            @click="showVoiceMess"
          >
            <span> Да</span>
          </button>
          <button
            type="button"
            class="
              intro__actions-btn
              btn
              title-sm
              btn-radius btn-primary btn--end
            "
            @click="endQwiz"
          >
            <span> Затрудняюсь ответить</span>
          </button>
        </div>
      </div>
    </div>

    <!-- qwiz answer voice-message -->
    <div class="qwiz-answer" v-if="counter == 'voice-mess'">
      <div class="qwiz-answer__icon">
        <img
          src="@/assets/img/svg/microphone.svg"
          alt="Запись сообщения"
          class="qwiz-answer__icon-svg"
        />
      </div>
      <div class="qwiz-answer__progress">
        <div
          class="qwiz-answer__progress-item"
          :style="{ maxWidth: progressWidth + '%' }"
        ></div>
      </div>
      <div class="qwiz-answer__mess">
        <p
          class="
            qwiz-answer__mess-progress
            title-sm
            color-secondary
            text-center
          "
        >
          <span>{{ progressWidth }}</span> %
        </p>
        <p class="qwiz-answer__mess-txt text-light color-secondary text-center">
          Запись сообщения
        </p>
      </div>
    </div>

    <div class="qwiz-end" v-if="counter == 'end'">
      <div class="qwiz-end__header qwiz-infos">
        <h4 class="qwiz-end__header-suptitle text-xl text-center">
          Спасибо за Ваши ответы!
        </h4>
        <h2 class="qwiz-end__header-title text-bold text-xl text-center">
          Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
        </h2>
      </div>
      <div class="qwiz-end__subheader">
        <h3 class="qwiz-end__subheader-title text-xl text-light text-center">
          Вы можете узнать, как повлиять на события, которые ожидают вас в
          ближайшем будущем.
        </h3>
      </div>
      <div class="qwiz-end__body">
        <p class="qwiz-end__body-txt text-xl color-primary text-center">
          <span class="tt-upercase text-bold">
            Первое значимое событие может произойти уже {{ eventDate }} </span
          >, Вам надо быть готовым, что бы последствия не оказались
          необратимыми.
        </p>
      </div>
      <div class="qwiz-end__footer">
        <p class="qwiz-end__footer-txt text-xl text-light text-center">
          Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
          Прослушайте важную информацию!
        </p>
        <button
          type="button"
          class="
            qwiz-end__footer-btn
            btn
            title-sm
            btn--start btn-success btn-radius
          "
          @click="onSubmit"
        >
          <span>Позвонить и прослушать</span>
        </button>
      </div>
      <div class="qwiz-end__info">
        <p class="text-xxs color-gray tt-upercase text-center">
          TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
          FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI
        </p>
      </div>
    </div>

    <div class="qwiz-footer" v-if="counter <= maxCount">
      <p class="qwiz-footer__count text-light color-secondary text-center">
        Вопрос <span>{{ counter }}</span> - <span>{{ maxCount }}</span>
      </p>
    </div>
    <div class="preloader" ref="preloader"></div>
    <modal
      v-show="modalShow"
      @closeModal="closeModal"
      :arrPersonInfo="getPersonInfo"
    />
  </main>
</template>

<script>
import modal from '@/components/Modal.vue'
import { mapGetters } from 'vuex'

export default {
  components: { modal },
  data() {
    return {
      counter: 2,
      maxCount: 5,
      dayNum: null,
      months: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      days: [],
      years: [],
      selectedMonth: null,
      selectedDay: null,
      selectedYear: null,
      fullAge: null,
      progressWidth: 0,
      validate: {
        errorMonth: false,
        errorDay: false,
        errorYear: false,
      },
      modalShow: false,
    }
  },
  mounted() {
    this.createDatePicker()
  },
  computed: {
    eventDate() {
      let currentDate = new Date()
      let day = currentDate.getDate()
      let month = currentDate.getMonth() + 1
      let year = currentDate.getFullYear()
      if (month && month < 10) {
        month = '0' + month
      }
      return `${day + 2}.${month}.${year}`
    },
    ...mapGetters(['getPersonInfo']),
  },
  methods: {
    createDatePicker() {
      this.populateDays()
      this.populateYears()
    },
    populateDays() {
      let month = this.selectedMonth
      // console.log(month)
      if (this.selectedMonth == null) {
        this.dayNum = 31
      } else {
        if (
          month == '01' ||
          month == '03' ||
          month == '05' ||
          month == '07' ||
          month == '08' ||
          month == '10' ||
          month == '12'
        ) {
          this.dayNum = 31
        } else if (
          month == '04' ||
          month == '06' ||
          month == '9' ||
          month == '11'
        ) {
          this.dayNum = 30
        } else {
          let year = this.selectedYear
          console.log(year)
          let leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          this.dayNum = leap ? 29 : 28
        }
      }
      if (this.dayNum) {
        if (this.selectedDay > this.dayNum) {
          this.selectedDay = this.dayNum
        }
      }

      if (!this.days.length == 0) {
        this.days = []
      }
      for (let i = 1; i <= this.dayNum; i++) {
        let option = i
        this.days.push(option)
      }
    },
    populateYears() {
      var date = new Date()
      var year = date.getFullYear()

      if (this.years.length == 0) {
        for (let i = 0; i <= 100; i++) {
          let option = year - i
          this.years.push(option)
        }
      }
    },
    validateDate() {
      let status = false

      if (!this.selectedMonth) {
        this.validate.errorMonth = true
      } else {
        this.validate.errorMonth = false
      }
      if (!this.selectedDay) {
        this.validate.errorDay = true
      } else {
        this.validate.errorDay = false
      }
      if (!this.selectedYear) {
        this.validate.errorYear = true
      } else {
        this.validate.errorYear = false
      }
      if (this.selectedMonth && this.selectedDay && this.selectedYear) {
        status = true
        for (let item in this.validate) {
          this.validate[item] = false
        }
      }
      return status
    },
    getFullYear() {
      const bd = new Date(
        this.selectedYear,
        this.selectedMonth,
        this.selectedDay
      )
      const nowDate = new Date()
      const addOne =
        nowDate.getMonth() - bd.getMonth() >= 0 &&
        nowDate.getDate() - bd.getDate() >= 0
      const diff = nowDate.getFullYear() - bd.getFullYear()
      this.fullAge = diff - 1 + (addOne ? 1 : 0)
    },
    loaderEnable() {
      if (!this.validateDate()) {
        return false
      }
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.preloader,
        color: '#f6c866',
        loader: 'spinner',
        width: 73,
        height: 73,
        backgroundColor: '#202024',
        opacity: 1,
      })

      // simulate AJAX
      setTimeout(() => {
        loader.hide()
        this.nextQwiz()
      }, 2000)
    },
    nextQwiz() {
      this.counter++
    },
    showVoiceMess() {
      // simulate voice mess
      this.counter = 'voice-mess'
      let fn = () => {
        if (this.progressWidth < 100) {
          this.progressWidth++
        } else {
          clearInterval(interval)
          this.counter = 'end'
        }
      }
      let interval = setInterval(fn, 100)
    },
    endQwiz() {
      this.counter = 'end'
    },
    onSubmit() {
      this.$store.dispatch('axiosPersonInfo')
      this.openModal()
    },
    closeModal() {
      this.modalShow = false
    },
    openModal() {
      this.modalShow = true
    },
  },
  watch: {
    selectedYear() {
      this.populateDays()
    },
    modalShow() {
      if (this.modalShow == true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
}
</script>
