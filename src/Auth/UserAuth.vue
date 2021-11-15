<template>
  <form @submit.prevent="submitForm">
    <div class="formControl">
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model.trim="email">
    </div>

    <div class="formControl">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password">

    </div>

    <p v-if="!formIsValid"> Ingrese un Email y Contraseña Validos</p>

    <button class="btn_login">{{ submitButtonCaption }}</button>
    <button class="btn_login" type="button" mode="flat" @click="switchAutoMode">{{ switchModeButtonCaption }}</button>

  </form>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {

    submitForm() {
      this.formIsValid = true;

      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      if (this.mode === 'login') {
        console.log("HOLA")
        this.$store.dispatch('login',
            {
              email: this.email,
              password: this.password
            });
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password
        });
      }
    },
    switchAutoMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    }
  }
}
</script>

<style scoped>
form {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 50%;
  margin: 1rem 1rem 1rem 13rem;
}

.formControl {
  margin: 0.5rem 0;

}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input, textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;

}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.btn_login {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 0.5rem .5rem 0.5rem 0;
}

</style>