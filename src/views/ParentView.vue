<template>

  <div>
    <input placeholder="StudentId" v-model="id"><br>
    <button v-on:click="getStudentBalanceById">Log in</button>
  </div>

</template>

<script>
export default {
  name: "ParentView",

  data: function () {

    return {
      id: ""
    }

  },

  methods: {

    getStudentBalanceById: function () {

      this.$http.get("/user/student-balance", {
            params: {
              id: this.id

            }
          }
      ).then(response => {
        alert("Õnnestus")
        console.log(response.data)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

  }
}



</script>

<style scoped>

</style>