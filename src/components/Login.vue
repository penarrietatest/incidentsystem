<template>
  <!-- <div class="login d-flex justify-center">
    <div class="align-self-center text-center"> -->
  <div class="login">
    <div class="login-form text-center px-2">
      <h3>{{ configuration.title }}</h3>
      <v-alert class="mt-5" dense text dismissible type="error" v-if="error">
        Usuario o contraseña incorrectos
      </v-alert>

      <form @submit.prevent="loginUser(formData)">
        <v-text-field
          v-model="formData.email"
          label="Email"
          append-icon="mdi-email"
          :error-messages="emailErrors"
          @input="$v.formData.email.$touch()"
          @blur="$v.formData.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          label="Contraseña"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          :error-messages="passwordErrors"
          @input="$v.formData.password.$touch()"
          @blur="$v.formData.password.$touch()"
        ></v-text-field>

        <v-btn type="submit" class="mt-3" :disabled="$v.$invalid" block
          >Ingresar</v-btn
        >
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data: () => ({
    formData: {
      email: "admin@pruebita.com",
      password: ".pruebita",
    },
    show: false,
  }),
  validations: {
    formData: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  computed: {
    ...mapState(["configuration", "error"]),
    emailErrors() {
      const errors = [];
      if (!this.$v.formData.email.$dirty) return errors;
      !this.$v.formData.email.email &&
        errors.push("Debe ser un e-mail válido.");
      !this.$v.formData.email.required && errors.push("E-mail es requerido.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.formData.password.$dirty) return errors;
      !this.$v.formData.password.minLength &&
        errors.push("La contraseña debe tener al menos 6 caracteres.");
      !this.$v.formData.password.required &&
        errors.push("La contraseña es requerido.");
      return errors;
    },
  },
  methods: {
    ...mapActions(["loginUser"]),
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
}
</style>
