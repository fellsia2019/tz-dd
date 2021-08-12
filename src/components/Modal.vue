<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('closeModal')">
      <div class="modal-content" @click.stop="">
        <div class="modal-body color-dark" v-if="arrPersonInfo">
          <ul class="list" v-if="showFl">
            <li class="list__item">
              <p>Имя:</p>
              <p>{{ arrPersonInfo.name }}</p>
            </li>
            <li class="list__item">
              <p>Рост:</p>
              <p>{{ arrPersonInfo.height }}</p>
            </li>
            <li class="list__item">
              <p>Вес:</p>
              <p>{{ arrPersonInfo.mass }}</p>
            </li>
            <li class="list__item">
              <p>Цвет волос:</p>
              <p>{{ arrPersonInfo.hair_color }}</p>
            </li>
            <li class="list__item">
              <p>Цвет кожи:</p>
              <p>{{ arrPersonInfo.skin_color }}</p>
            </li>
            <li class="list__item">
              <p>Цвет глаз:</p>
              <p>{{ arrPersonInfo.eye_color }}</p>
            </li>
            <li class="list__item">
              <p>День рождения:</p>
              <p>{{ arrPersonInfo.birth_year }}</p>
            </li>
            <li class="list__item">
              <p>Пол:</p>
              <p>{{ arrPersonInfo.gender }}</p>
            </li>
            <li class="list__item">
              <p>created:</p>
              <p>{{ arrPersonInfo.created }}</p>
            </li>
            <li class="list__item">
              <p>edited:</p>
              <p>{{ arrPersonInfo.edited }}</p>
            </li>
          </ul>
          <ul class="list" v-else>
            <li class="list__item" v-for="item in arrPersonInfo" :key="item.id">
              <p>{{ item }}</p>
            </li>
          </ul>
          <button
            type="button"
            class="modal-body__btn btn btn-primary btn-radius"
            @click="showFl = !showFl"
          >
            Показать все элементы объекта
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.$emit('closeModal')
      }
    })
  },
  props: ['arrPersonInfo'],
  data() {
    return {
      showFl: true,
    }
  },
}
</script>
