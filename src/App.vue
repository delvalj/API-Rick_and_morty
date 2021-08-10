<template>
<div>
  <h1>Rick and Morty</h1>
  <ListCharacters></ListCharacters>
</div>
</template>

<script>
import ListCharacters from "@/components/ListCharacters";

export default {
  name: 'App',
  components: {
      ListCharacters
  }
}
</script>

<style>

</style>
