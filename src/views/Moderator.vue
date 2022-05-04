<template>

  <div>


    <h2> Get students by group Id</h2>
    <input placeholder="Enter Group id" v-model="groupId"><br>
    <button v-on:click="getAllStudentsByGroupId">Enter</button>
    <br>
    <br>
    <br>

    <h2> Get contact info by user Id</h2>
    <input placeholder="Enter user id" v-model="userId "><br>
    <button v-on:click="getUserContactByUserId">Enter</button>
    <br>
    <br>
    <br>

    <h2> Get contact info by student Id</h2>
    <input placeholder="Enter student id" v-model="studentId "><br>
    <button v-on:click="getUserContactByStudentId">Enter</button>
    <br>
    <br>
    <br>


  </div>


</template>

<script>
export default {
  name: "Moderator",
  data: function () {

    return {
      groupId: "",
      userId: "",
      studentId: ""
    }

  },

  methods: {

    getAllStudentsByGroupId: function () {

      this.$http.get("/moderator/all-students", {
            params: {
              groupId: this.groupId,

            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getUserContactByUserId: function () {

      this.$http.get("/moderator/user-contact-info", {
            params: {
              userId: this.userId,

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

    getUserContactByStudentId: function () {

      this.$http.get("/moderator/user-contact-by-student-id", {
            params: {
              studentId: this.studentId,

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