<template>


  <div>

    <h1>Log in</h1>
    <input placeholder="username" v-model="userName"><br>
    <input placeholder="password" v-model="password"><br>
    <button v-on:click="logIn">Log in</button>
    <br>
    <br>

    <router-link :to="{ name: 'registerRoute'}">register</router-link>
    <br>
    <br>
    <br>


  </div>


</template>

<script>
export default {
  name: "Login",

  data: function () {

    return {

      userName: '',
      password: '',
      userId: "",
      roleId: ""
    }

  },

  methods: {

    logIn: function () {

      this.$http.get("/log-in", {
            params: {
              userName: this.userName,
              password: this.password
            }
          }
      ).then(response => {
        this.userId = response.data.userId
        this.roleId = response.data.roleId
        sessionStorage.setItem('userId', this.userId)
        sessionStorage.setItem('roleId', this.roleId)
        this.$router.push({name: 'userViewRoute'})
        //
        // if (this.userRoleId == 4) {
        //   this.$router.push({name: 'moderatorRoute'})
        //
        // } else {
        //   this.$router.push({name: 'parentRoute'})
        // }

        // switch (this.userRoleId) {
        //   case "4":
        //     this.$router.push({name: 'moderatorRoute'})

    }
).catch(error => {
  alert("Sisselogimine ei õnnestunud, vale parool või kasutajanimi")
  console.log(error)
})
},

},

}


</script>

<style scoped>

</style>