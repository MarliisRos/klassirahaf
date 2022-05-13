<template>

  <div>
  <div>
    <h2>Sisselogimine</h2>

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

    <div align="center">
    <button type="button" v-on:click="logIn" class="btn btn-secondary">Login</button>
    <button type="button" v-on:click="toRegisterView" class="btn btn-secondary">Registreeri</button>
    </div>
  </div>

  <div class="logimine">
    <p class="lahter">
    <input type="email" v-model="userName" placeholder="Lisa kasutajanimi">
    <input type="password" v-model="password" placeholder="Lisa parool"></p>
    <button v-on:click="logIn" class="btn"><a href="#">Logi sisse</a></button>
    <button v-on:click="toRegisterView" class="btn"><a href="#">Registreeru</a></button>

    <p class="link">Kasutajakonto puudub</p><br>
    <a href="#">Registreeru </a>siin</a></p>
    <p class="liw">Logi sisse</p>
    </div>
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

.pealkiri h1 {
  font-family: "Times New Roman";
  font-size: 50px;
  padding-left: 20px;
  margin-top: 9%;
  letter-spacing: 2px;
}
.lahter{
  width: 250px;
  height: 380px;
  background: linear-gradient(to top, rgba(0,0,0,0.8)50%,rgba(0,0,0,0.8)50%);
  position: absolute;
  top: -20px;
  left: 870px;
  border-radius: 10px;
  padding: 25px;
}
h2 {
  with: 220px;
  font-family: sans-serif;
  text-align: center;
  color: red;
  font-size: 22px;
  background-color:rosybrown;
  border-radius: 10px;
  margin: 2px;
  padding: 8px;
}
.lahter input {
  width: 240px;
  height: 35px;
  background: transparent;
  border-bottom: 1px solid lightgray;
  border-top: none;
  border-right: none;
  border-left: none;
  color: snow;
  font-size: 15px;
  letter-spacing: 1px;
  margin-top: 30px;
  font-family: sans-serif;
}
.lahter input:focus{
  outline: none;
}
::placeholder{
  color: snow;
  font-family: "Times New Roman";
}
.btn{
  width: 240px;
  height: 40px;
  background: rosybrown;
  border: none;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  color: snow;
  transform: 0.4s ease;

  .btn:hover{
    background: snow;
    color: rosybrown;
  }
  .btnn a{
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }
  .logimine.link{
    font-family: "Times New Roman";
    font-size: 17px;
    padding-top: 20px;
    text-align: center;
  }
  logimine.link a{
    text-decoration: rosybrown;
  }
.liw{
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: center;

}
}
</style>