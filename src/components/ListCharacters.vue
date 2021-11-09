<template>
  <section>

    <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character"/>
      </div>
    </div>

    <div class="btn_pagination">
      <button class="btn"> PREVIOUS</button>
      <button class="btn"> NEXT</button>
    </div>

  </section>
</template>

<script>
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'

import CardCharacter from "@/components/CardCharacter";

export default {
  components: {
    CardCharacter
  },

  setup() {
    const store = useStore()

    const characters = computed(() => {
      return store.state.charactersFilter
    })
    onMounted(() => {
      store.dispatch('getCharacters')
    })

    return {
      characters
    }
  },



}

</script>

<style lang="scss">

.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem 0;
}

.characters__item {
  padding: 2px;
}

.btn {
  padding: 15px;
  margin: 2px;
  border-radius: 20px;
  border: 1px solid black;
  display: inline;
  position: relative;
  left:792px;

  &:hover {
    background-color: var(--text-orange);
  }
}


</style>
