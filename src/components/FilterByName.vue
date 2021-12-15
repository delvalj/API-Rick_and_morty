<template>
  <div class="search" @click="filterName">
    <input type="text" placeholder="Search Character" @keyup="filterName()" v-model="name">
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {ref} from 'vue'

export default {
  name: "FilterByName",
  setup() {
    const store = useStore()
    const name = ref('')
    const filterName = (() => {
      store.dispatch('filterByName', name.value)
    })
    return {
      name,
      filterName
    }
  }
}
</script>

<style lang="scss">

.search {
  width: 400px;
  margin: 3rem auto 0;

  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>