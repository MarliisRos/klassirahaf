<template>
<div>
  <div>
    <h1>Sign Up & Start Your Klassiraha</h1>
  </div>
  <br>
  <br>
    <div>

      <button>logi sisse</button><button>Registreeru</button><br>
      <br>
      <br>
      <br>
      <h4>Sisselogimine</h4>
    <input placeholder="Kasutajanimi" v-model="username"><br>
    <input placeholder="parool" v-model="password"><br>
      <button>Logi sisse</button><br>
    <br>
    <br>
    </div>

</div>
 </template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

<style scoped>

</style>