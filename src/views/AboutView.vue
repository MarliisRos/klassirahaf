<template>
  <div>
    <div class="pealkiri">
      <h1>Klassiraha</h1>
      <p class="par">haldamine ei põhjusta enam peavalu! </p>
    </div>
<!--    <div>-->
<!--      &lt;!&ndash;      <div class="search">&ndash;&gt;-->
<!--      <input class="srch" type="search" name="" placeholder="Otsing">-->
<!--    </div>-->

    <!--        <button class="btn">Otsing</button>-->
    <!--      </div>-->
    <!--      <div calss="image">-->
    <!--        <img-->
    <!--            src="pliiats.jpg"-->
    <!--            alt="">-->
    <!--      </div>-->
    <!--      <div/>-->
    <!--      <a href="https://unsplash.com/photos/l3N9Q27zULw"></a>-->
    <div class="form">
      <h2>Logi sisse</h2>
      <input type="userName" v-model="userName" placeholder="Kasutajanimi">
      <input type="password" v-model="password" placeholder="Parool">
      <button type="button" v-on:click="logIn" class="btnn">Logi sisse</button><br>
      <br>
      <p class="link">Sul ei ole veel kontot, registreeru kasutajaks</p>
      <button type="button" v-on:click="toRegisterView" class="btnn">Registreeru</button>
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

.srch {
  width: 430px;
  float: right;
  margin-left: 570px;
  padding-top: revert;
}

.srch {
  font-family: sans-serif;
  width: 200px;
  height: 40px;
  background: white;
  border: chocolate;
  margin-top: 3px;
  color: midnightblue;
  border-right: none;
  font-size: 16px;
  float: left;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.srch:focus {
  outline: none;
}

.btn {
  width: 100px;
  height: 40px;
  background: gainsboro;
  border: 2px solid lightgray;
  margin-top: 13px;
  color: chocolate;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  background-color: silver;
}

.pealkiri par {
  width: 1200px;
  height: auto;
  margin: auto;
  color: midnightblue;
  position: relative;
}

.pealkiri par {
  padding-left: 20px;
  padding-bottom: 25px;
  font-family: sans-serif;
  letter-spacing: 1.8px;
  line-heiht: 30px;

}

.pealkiri h1 {
  font-family: "Times New Roman";
  font-size: 45px;
  padding-left: 20px;
  margin-top: 2%;
  letter-spacing: 2px;
  color: chocolate;
}

.form {
  width: 290px;
  height: 420px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 0%);
  position: absolute;
  top: 200px;
  left:700px;
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
  font-size: 20px;
  letter-spacing: 1px;
  margin-top:20px;
  font-family: Sans-sarif;
}

.form input:focus {
  outline: none;
}

::placeholder {
  color: silver;
  font-family: Sans-sarif;
}

.btnn {
  width: 240px;
  height: 40px;
  background: silver;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin-top: 20px;
  color: chocolate;
  font-size: 18px;
  transition: 0.4s ease;
}

.btnn:hover {
  background: white;
  color: chocolate;
}

.btnn a {
  color: chocolate;
  font-weight: bold;
}

/*.form.link {*/
/*  font-family: Sans-sarif;*/
/*  font-size: 17px;*/
/*  padding-top: 20px;*/
/*  text-align: center;*/
/*}*/

/*.form.link a {*/
/*  text-decoration: none;*/
/*  color: chocolate;*/
/*}*/
</style>
