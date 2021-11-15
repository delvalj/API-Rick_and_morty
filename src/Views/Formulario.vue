<template>
  <div class="formulario">

    <h4>FORMULARIO NUEVO CLIENTE</h4>

    <form @submit="postClientes">

      <input type="text" placeholder="Name" v-model="user.name">
      <input type="text" placeholder="Job" v-model="user.job">

      <button class="btn_enviar"> ENVIAR</button>

    </form>

    <form @submit="registrarCliente">

      <input type="text" placeholder="Email" v-model="user.email">
      <input type="text" placeholder="Password" v-model="user.password">

      <button class="btn_"> REGISTRAR</button>

    </form>

  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: "Formulario",
  data() {
    return {
      user: {
        name: '',
        job: '',

        cliente: {
          email: "eve.holt@reqres.in",
          password: "pistol"
        }

      },
      // client: {
      //   email: "eve.holt@reqres.in",
      //   password: "pistol"
      // }
    }
  },
  methods: {
    postClientes(e) {
      e.preventDefault()

      let usr = Object.assign({}, this.user);

      axios.post('https://reqres.in/api/users', usr)
          .then(function (response) {
            console.log(response);
            // console.log(this.user);
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    registrarCliente(e) {
      e.preventDefault()

      let clnt = Object.assign({}, this.user.cliente);

      axios.post('https://reqres.in/api/register', clnt)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  }
}
</script>

<style scoped>

.formulario {
  border: 2px solid white;
  margin: 15px;
  padding: 15px;
}

input, .btn_enviar, .btn_ {
  margin: 10px;
  padding: 10px;

}


</style>