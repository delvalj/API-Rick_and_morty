
<!--<template>-->

<!--  <h2> USERS HERE! </h2>-->
<!--  <div class="usuarios">-->

<!--    <i class="fas fa-user"></i>-->
<!--    <table v-for="user in users" :key="user.id">-->
<!--      <tr>-->
<!--        <th>ID</th>-->
<!--        <th>FIRST NAME</th>-->
<!--        <th> Email</th>-->
<!--        <th> ACTIONS</th>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td> {{ user.id }}</td>-->
<!--        <td> {{ user.first_name }}</td>-->
<!--        <td> {{ user.email }}</td>-->
<!--        <td></td>-->
<!--      </tr>-->

<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {useStore} from "vuex";-->
<!--import {computed, onMounted} from "vue";-->

<!--export default {-->
<!--  name: "Users",-->

<!--  setup() {-->
<!--    const store = useStore()-->

<!--    const users = computed(() => {-->
<!--      return store.state.usersFilter-->
<!--    })-->
<!--    onMounted(() => {-->
<!--      store.dispatch('getUsers')-->
<!--    })-->

<!--    return {-->
<!--      users-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--h2 {-->
<!--  margin-top: 10px;-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--table, td, th {-->
<!--  border: 1px solid #ddd;-->
<!--  text-align: left;-->
<!--  width: 25%;-->

<!--}-->

<!--table {-->

<!--  width: 100%;-->
<!--}-->

<!--th, td {-->
<!--  padding: 15px;-->
<!--}-->


<!--tr:nth-child(even) {-->
<!--  background-color: gray-->
<!--}-->

<!--</style>-->