<template>

  <div class="container">
    <h1>Rick And Morty</h1>

    <FilterByStatus></FilterByStatus>
    <FilterByName></FilterByName>
    <router-view></router-view>
    <Pagination></Pagination>

  </div>

</template>

<script>
// import ListCharacters from "@/components/ListCharacters";
import FilterByStatus from "@/components/FilterByStatus";
import FilterByName from "@/components/FilterByName";
import Pagination from "@/components/Pagination";

export default {
  name: 'App',
  components: {
    // ListCharacters
    FilterByStatus,
    FilterByName,
    Pagination
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-gray: #c0c0c0;
  --text-white: #FFFFFF;
  --text-orange: #FF9800;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'SegoeUI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin-bottom: 3rem;
  text-align: center;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

img {
  width: 100%;
}

.btn_menu {
  padding: 15px;
  margin: 2px;
  border-radius: 20px;
  border: 1px solid black;
  display: inline;
}

.btn_menu:hover {
  background-color: var(--text-orange);
}


</style>
