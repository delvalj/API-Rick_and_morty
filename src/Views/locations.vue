<template>
  <h2> LOCATIONS HERE! </h2>



    <table v-for="location in locations" :key="location.id">
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>TYPE</th>
      </tr>
      <tr>
        <td> {{ location.id }}</td>
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


table, td, th {
  border: 1px solid #ddd;
  text-align: left;
  width: 50%;


}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}

tr:hover {
  background-color: gray;
}

</style>