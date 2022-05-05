<template>

 <div>
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

</style>