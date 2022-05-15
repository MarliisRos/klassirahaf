<template>

  <div>
    <div class="form">
      <h2>Registreeru</h2>
      <input placeholder="Eesnimi" v-model="newUserInfo.contactFirstName"><br>
      <input placeholder="Perekonnanimi" v-model="newUserInfo.contactLastName"><br>
      <input placeholder="E-mail" v-model="newUserInfo.contactEmail"><br>
      <input placeholder="Telefoninumber" v-model="newUserInfo.contactTel"><br>
      <input placeholder="Arvelduskonto" v-model="newUserInfo.contactAccountNumber"><br>
      <input placeholder="Kasutajanimi" v-model="newUserInfo.userName"><br>
      <input placeholder="Parool" v-model="newUserInfo.password"><br>
      <button v-on:click="createNewUser" class="btnn">Registreeru</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data: function () {

    return {

      newUserInfo: {},
      userId: 0,
      roleId: 0

    }

  },

  methods: {

    createNewUser: function () {

      this.$http.post("/expense/new-user", this.newUserInfo
      ).then(response => {
        alert("Kasutaja loomine õnnestus")
        this.userId = response.data.userId
        this.roleId = response.data.roleId
        sessionStorage.setItem('userId', this.userId)
        sessionStorage.setItem('roleId', this.roleId)
        this.$router.push({name: 'userViewRoute'})
        console.log(response.data)
      }).catch(error => {
        alert("Kasutaja loomine ei õnnestunud")
        console.log(error)
      })
    },
  },
}

</script>

<style scoped>
.pealkiri h1 {
  font-family: "Times New Roman";
  font-size: 40px;
  padding-left: 20px;
  margin-top: 2%;
  letter-spacing: 1.8px;
  color: chocolate;
}

.form {
  width: 290px;
  height: 500px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 0%);
  position: absolute;
  top: 80px;
  left:550px;
  border-radius: 20px;
  padding: 20px;
}

.form h2 {
  width: 240px;
  font-family: Sans-sarif;
  font-weight: bold;
  letter-spacing: 1.6px;
  text-align: center;
  color: chocolate;
  font-size: 22px;
  background-color: white;
  border-radius: 10px;
  margin: 2px;
  padding: 8px;
}

.form input {
  width: 240px;
  height: 35px;
  background: transparent;
  border-bottom: 1px solid silver;
  border-top: none;
  border-right: none;
  border-left: none;
  color: midnightblue;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top:16px;
  font-family: Sans-sarif;
}

.form input:focus {
  outline: none;
}

::placeholder {
  color: silver;
  font-family: Sans-sarif;
}




</style>