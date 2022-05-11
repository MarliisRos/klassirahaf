<template>


  <div>


    <h1>Log in</h1>


    <div>
      <div class="d-inline-flex p-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Username</label>
          </div>
          <input type="text" v-model="userName">
        </div>
      </div>
    </div>
    <div>
      <div class="d-inline-flex p-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Password</label>
          </div>
          <input type="password" v-model="password">
        </div>
      </div>
    </div>

    <button type="button" v-on:click="logIn" class="btn btn-secondary">Login</button>
    <br>
    <br>


    <button type="button" v-on:click="toRegisterView" class="btn btn-secondary">Registreeri</button>



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

    toRegisterView: function () {
      this.$router.push({name: 'registerRoute'})
    },

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
        this.roleId = response.data.roleId
        sessionStorage.setItem('userId', this.userId)
        sessionStorage.setItem('roleId', this.roleId)
        this.$router.push({name: 'userViewRoute'})

        // if (this.userRoleId === 4) {

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
  alert("Sisselogimine ei õnnestunud")
  console.log(error)
})
},

},

}


</script>

<style scoped>

</style>