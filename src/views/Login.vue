<template>


  <div>

    <h1>Log in</h1>
    <input placeholder="username" v-model="userName"><br>
    <input placeholder="password" v-model="password"><br>
    <button v-on:click="logIn">Log in</button>
    <br>
    <br>
    <br>

    <h1>Create new user</h1>
    <input placeholder="First name" v-model="newUserInfo.contactFirstName"><br>
    <input placeholder="Last name" v-model="newUserInfo.contactLastName"><br>
    <input placeholder="Email address" v-model="newUserInfo.contactEmail"><br>
    <input placeholder="Telephone number" v-model="newUserInfo.contactTel"><br>
    <input placeholder="Bank account number" v-model="newUserInfo.contactAccountNumber"><br>
    <input placeholder="Username" v-model="newUserInfo.userName"><br>
    <input placeholder="Password" v-model="newUserInfo.password"><br>
    <button v-on:click="createNewUser">Create user</button>


  </div>


</template>

<script>
export default {
  name: "Login",

  data: function () {

    return {

      newUserInfo: {
        contactFirstName: "",
        contactLastName: "",
        contactEmail: "",
        contactTel: "",
        contactAccountNumber: "",
        userName: "",
        password: ""
      },

      userName: "",
      password: "",
      userId:"",
      userRoleId: ""
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
        alert("Sisselogimine õnnestus")
        this.userId = response.data.userId
        this.userRoleId = response.data.userRoleId
        console.log(response.data)
      }).catch(error => {
        alert("Sisselogimine ei õnnestunud")
        console.log(error)
      })
    },

    createNewUser: function () {

      // if using alternative then remove "this." from someDtoObject
      this.$http.post("/expense/new-user", this.newUserInfo
      ).then(response => {
        alert("Kasutaja loomine eõnnestus")
        console.log(response.data)
      }).catch(error => {
        alert("Kasutaja loomine ei eõnnestunud")
        console.log(error)
      })
    }

  },

}


</script>

<style scoped>

</style>