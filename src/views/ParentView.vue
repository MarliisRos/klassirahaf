<template>

  <div>



    <input placeholder="Group name" v-model="groupInfoRequest.groupName"><br>
    <input placeholder="Description" v-model="groupInfoRequest.description"><br>
    <button v-on:click="createNewGroup">Create new group</button>
    <br>
    <br>

    <input placeholder="StudentId" v-model="id"><br>
    <button v-on:click="getStudentBalanceById">Get student balance info</button>
    <br>
    <br>
    <br>
    <input placeholder="Get students by user id" v-model="userId"><br>
    <button v-on:click="getStudentByUserId">Get students by user id</button>

    <div v-if="tableDIV">

      <table class="table table-striped" style="width: auto" align="center">
        <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">button</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="student in students">
          <td>{{ student.firstName}}</td>
          <td>{{ student.lastName}}</td>
          <td><button v-on:click="getStudentBalanceById(student.studentId)" type="button" class="btn btn-warning" >Show student balance</button></td>
        </tr>

        <div v-if="tableDIV2">

          <table class="table table-striped" >
            <thead>
            <tr>
              <th scope="col">Group balance</th>
              <th scope="col">Student balance</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ balance.groupBalanceBalance}}</td>
              <td>{{ balance.balance}}</td>
            </tr>

            </tbody>
          </table>
        </div>

        </tbody>
      </table>
    </div>



  </div>



</template>

<script>
export default {
  name: "ParentView",

  data: function () {

    return {
      tableDIV: false,
      tableDIV2: false,
      studentId: 0,
      id: '',
      groupName: "",
      description: "",
      groupBalanceBalance: 0,
      userId: 0,
      students: {},
      balance: {},
      groupInfoRequest: {
        userId: sessionStorage.getItem('userId'),
        groupName: '',
        description: ''
      },
      roleId: '',
    }

  },

  methods: {

    createNewGroup: function () {
      this.$http.post("/expense/new-group", this.groupInfoRequest
      ).then(response => {
        alert("Grupi loomine õnnestus")
        this.roleId = response.data
        sessionStorage.setItem('roleId', response.data)
        console.log(response.data)
      }).catch(error => {
        alert("Grupi loomine ei õnnestunud")
        console.log(error)
      })
    },

    getStudentBalanceById: function (studentId) {

      this.$http.get("/user/student-balance", {
            params: {
              id: studentId
            }
          }
      ).then(response => {
        this.balance = response.data
        this.tableDIV2 = true
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getStudentByUserId: function () {

      this.$http.get("/user/student-by-user-id", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        alert("Õnnestus")
        this.students = response.data
        this.tableDIV = true
        console.log(response.data)
        console.log(response.data.firstName)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    getStudentBalanceLogByStudentId: function () {

      this.$http.get("/user/student-by-user-id", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        alert("Õnnestus")
        this.students = response.data
        this.tableDIV = true
        console.log(response.data)
        console.log(response.data.firstName)
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