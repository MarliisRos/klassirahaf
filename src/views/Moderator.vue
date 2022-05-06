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
    <button v-on:click="getYourGroup">Find your groups</button>

    <div v-if="groupListDiv">
      <input placeholder="Enter user id" v-model="userId "><br>
      <table class="table table-hover" style="width:auto" align="center" >
        <thead>
        <tr >
          <th scope="col">Group name</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in yourGroups" >
          <td>{{ group.groupName }}</td>
          <td>{{ group.description}}</td>
          <td>
            <button v-on:click="toGroupDiv" type="button" name="btn" class="btn btn-secondary btn-sm m-3" >Vali grupp</button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>


  </div>


</template>

<script>
export default {
  name: "Moderator",
  data: function () {

    return {
      groupId: 0,
      userId:0,
      // userId: sessionStorage.getItem('userId'),
      studentId: 0,
      yourGroups: {},
      groupListDiv: true

     }
  },

  methods: {

    getYourGroup: function () {

        this.$http.get("/expense/group-by-user-id", {
          params: {
            userId: this.userId,
          }
          }
        ).then(response => {
          this.yourGroups = response.data
          this.groupId = response.data.groupId
          sessionStorage.setItem('groupId', response.data.groupId)
              console.log(response.data)
            }).catch(error => {
          console.log(error)
        })
    },

    getAllStudentsByGroupId: function () {
      this.$http.get("/moderator/all-students", {
            params: {
              groupId: this.groupId,
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

    toGroupDiv: function () {
      this.groupListDiv = false
    }



  }
}


</script>

<style scoped>

</style>