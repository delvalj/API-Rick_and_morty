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

<style Lang="scss">
  :root {
  --background-body: #24282F;
    --background-card: #3C3E44;
    --text-gray: #c0c0c0;
    --text-white: #FFFFFF;
    --text-orange: #FF9800;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  body{
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: 'SegoeUI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1{
    margin-bottom: 3rem;
    text-align: center;

  }
  .container{
    width: 980px;
    max-width: 90%;
    margin: 5rem auto;
  }
  img{
    width: 100%;
  }
</style>
