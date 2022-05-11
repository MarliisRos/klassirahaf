<template>
  <div>

    <div>
      <Title>Sign Up & Start Your Klassiraha</Title>
    </div>
    <br>
    <br>
      <h3>Registreeru</h3>
      <input type="text" placeholder="Eesnimi" v-model="contactRequest.contactFirstName"><br>
      <input placeholder="Perekonnanimi" v-model="contactRequest.contactLastName"><br>
      <input placeholder="E-post" v-model="contactRequest.contactEmail"><br>
      <input placeholder="Telefoninumber" v-model="contactRequest.contactTel"><br>
      <input placeholder="Pangakonto" v-model="contactRequest.contactAccountNumber"><br>
      <br>
      <br>
      <input placeholder="Kasutajanimi" v-model="userName"><br>
      <input placeholder="Parool" v-model="password"><br>
      <br>
      <button v-on:click="saveDataToLocalStorage" type="button">Registreeru</button>
      <br>
  </div>

</template>

<script>
export default {
  name: "Registreeru",
  data: function () {
    return {
      contactRequest: {}
    }
  },
  methods: {
    addNewContact: function () {
      this.$http.post(`/expense/new-user`, this.contactRequest)
          .then(response => {
            this.contactRequest.userId = response.data.id
            alert(`Kasutaja registreeritud ` + this.contactRequest.userId)
          })
          .catch(error => {
            alert(error.response.data.detail)
            console.log(error.response.data)
          })
    },
    saveDataToLocalStorage: function () {
      localStorage.setItem(`firstName`, this.contactRequest.contactFirstName)
      localStorage.setItem(`lastName`, this.contactRequest.contactLastName)
      localStorage.setItem(`email`, this.contactRequest.contactemail)
      localStorage.setItem(`telefon`, this.contactRequest.contactTel)
      localStorage.setItem(`accountNumber`, this.contactRequest.cobtactAccountNumber)
      localStorage.setItem(`customer`, JSON.stringify(this.contactRequest))
    }
  }
}
</script>

<style scoped>

</style>