<template>



 <div>
   <div align="left">
     <button v-on:click="toMainPage()" class="btn btn-light btn-sm m-1">Pealeheküljele
     </button>
     <br>
     <br>
   </div>
   <div>
     <img
         src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg"
         alt="">
   </div>
   <br>
  <h3>Registreeri uue kasutaja</h3>
   <div align="center">
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Eesnimi</span>
       </div>
       <input type="text" v-model="newUserInfo.contactFirstName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Perekonnanimi</span>
       </div>
       <input type="text" v-model="newUserInfo.contactLastName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">E-mail</span>
       </div>
       <input type="text" v-model="newUserInfo.contactEmail" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Telefoninumber</span>
       </div>
       <input type="text" v-model="newUserInfo.contactTel" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>

        <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Pangakontonumber</span>
       </div>
       <input type="text" v-model="newUserInfo.contactAccountNumber" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Kasutajanimi</span>
       </div>
       <input type="text" v-model="newUserInfo.userName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3" style="width: 350px">
       <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Parool</span>
       </div>
       <input type="password" v-model="newUserInfo.password" v-on:keyup.enter="createNewUser" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <button v-on:click="createNewUser()" class="btn btn-secondary">Registreeri uue kasutaja</button>
     <br>
   </div>

  </div>

</template>

<script>
export default {
  name: "RegisterView",

  data: function () {

    return {
      newUserInfo: {},
      userId: sessionStorage.getItem('userId'),
      roleId: sessionStorage.getItem('roleId')
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

</style>