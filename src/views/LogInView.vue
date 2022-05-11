<template>
  <div>
    <div>
      <H3>Sign Up & Start Your Klassiraha</H3>
    </div>
    <br>
    <br>
    <div>
      <h4>Sisselogimine</h4>
      <input placeholder="Kasutajanimi" v-model="userName"><br>
      <input placeholder="parool" v-model="password"><br>
      <br>
      <button>Logi sisse</button>
      <button>Registreeru</button>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sisene",
  data: function () {
    return {
      userName: "",
      password: ""
    }
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: azure;
  font-family: Georgia;
  front-size: 20px;
  padding: 50px;
}

h3 {
  front-size: 40px;
  padding-bottom: 25px;
  color: dimgrey;
}

h4 {
  front-size: 30px;
  padding-bottom: 15px;
  color: darksalmon;
}

input,
placeholder {
  padding: 10px;
  front-size: 16px;
}

input,
button {
}

img {
  width: 200px;
  height: 200px;
}
</style>


