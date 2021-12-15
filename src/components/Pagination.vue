<template>
  <div class="pagination">

    <button class="btn" @click="page1"> 1</button>
    <button class="btn" @click="page2"> 2</button>
    <button class="btn" @click="page3"> 3</button>
    <button class="btn" @click="page4"> 4</button>
    <button class="btn" @click="page5"> 5</button>
    <button class="btn" @click="page6"> 6</button>
    <button class="btn" @click="page7"> 7</button>
    <button class="btn" @click="page8"> 8</button>
    <button class="btn" @click="page9"> 9</button>
    <button class="btn" @click="page10"> 10</button>

  </div>
</template>

<script>

// import {useStore} from 'vuex'
import {computed} from "vue";

export default {
  name: "Pagination",

  methods: {
    page1() {
      const characters = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharacters')
      return characters;
    },

    page2() {
      const characters2 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage2')
      return characters2;
    },

    page3() {
      const characters3 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage3')
      return characters3;
    },

    page4() {
      const characters4 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage4')
      return characters4;
    },

    page5() {
      const characters5 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage5')
      return characters5;
    },

    page6() {
      const characters6 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage6')
      return characters6;
    },

    page7() {
      const characters7 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage7')
      return characters7;
    },

    page8() {
      const characters8 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage8')
      return characters8;
    },

    page9() {
      const characters9 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage9')
      return characters9;
    },

    page10() {
      const characters10 = computed(() => {
        return this.$store.state.charactersFilter
      })
      this.$store.dispatch('getCharactersPage10')
      return characters10;
    },

  }
}
</script>

<style lang="scss">

.pagination {
  position: relative;
  left: 300px;
}

.btn {
  width: 30px;
  height: 35px;
  padding: 5px;
  margin: 2px;

  &:hover {
    background-color: var(--text-orange);
  }
}
</style>