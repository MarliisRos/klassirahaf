<template>


  <div>
    <div>
      <img
          src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg"
          alt="">
    </div>
    <br>

    <h1>Log in</h1>

    <div>
      <div class="d-inline-flex p-2" >
        <div class="input-group mb-3" >
          <div class="input-group-prepend" >
            <label class="input-group-text" style="width: 115px">Kasutajanimi</label>
          </div>
          <input type="text" v-model="userName">
        </div>
      </div>
    </div>
    <div>
      <div class="d-inline-flex p-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text"  style="width: 115px; text-align: right" >Parool</label>
          </div>
          <input type="password" v-model="password" v-on:keyup.enter="logIn">
        </div>
      </div>
    </div>

    <button type="button" v-on:click="logIn" class="btn btn-secondary m-2" style="width: 120px" >Logi sisse</button>

    <button type="button" v-on:click="toRegisterView" class="btn btn-secondary" style="width: 120px">Registreeri</button>

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
        this.userId = response.data.userId
        this.roleId = response.data.roleId
        sessionStorage.setItem('userId', this.userId)
        sessionStorage.setItem('roleId', this.roleId)
        this.$router.push({name: 'userViewRoute'})

    }
).catch(error => {
  alert("Sisselogimine ei õnnestunud, vale kasutajanimi või parool")
  console.log(error)
})
},

},

}


</script>

<style scoped>

.d-inline-flex {
  color: blue;
  border: violet;
}

</style>