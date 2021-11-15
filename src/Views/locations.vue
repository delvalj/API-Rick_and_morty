<template>
  <h2> LOCATIONS HERE! </h2>

  <table v-for="location in locations" :key="location.id">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Planet Type</th>
    </tr>

    <tr>
      <td>{{ location.id }}</td>
      <td>{{ location.name }}</td>
      <td>{{ location.type }}</td>
    </tr>

  </table>

</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "locations",

  setup() {
    const store = useStore()

    const locations = computed(() => {
      return store.state.locationsFilter
    })
    onMounted(() => {
      store.dispatch('getLocations')
    })

    return {
      locations
    }
  }

}
</script>

<style scoped>

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

table, td, th {
  border: 1px solid #ddd;
  text-align: left;
  width: 30%;

}

table {

  width: 100%;
}

th, td {
  padding: 15px;
}


tr:nth-child(even) {
  background-color: gray
}

</style>