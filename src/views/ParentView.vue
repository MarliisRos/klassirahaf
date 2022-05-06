<template>

  <div>

    <input placeholder="StudentId" v-model="id"><br>
    <button v-on:click="getStudentBalanceById">Get student balance info</button>
    <br>
    <br>
    <br>
    <input placeholder="Get students by user id" v-model="userId"><br>
    <button v-on:click="getStudentByUserId">Get students by user id</button>
    <br>
    <br>
    <input placeholder="Get student balance log by student id" v-model="studentId"><br>
    <button v-on:click="getStudentBalanceLogByStudentId">Get student balance log by student id</button>

    <div v-if="studentBalanceLogTable">

      <table class="table table-striped" style="width: auto" align="center">
        <thead>
        <tr>
          <th scope="col">Transfer name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Type</th>
          <th scope="col">Date and time</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="studentBalanceLog in studentBalanceLogs">
          <td>{{studentBalanceLog.transferName}}</td>
          <td>{{studentBalanceLog.description}}</td>
          <td>{{studentBalanceLog.amount}}</td>
          <td>{{studentBalanceLog.type}}</td>
          <td>{{studentBalanceLog.dateTime}}</td>

          <td>
            <button v-on:click="getStudentBalanceById(student.studentId)" type="button" class="btn btn-warning">Show
              student balance log
            </button>
          </td>
          <div v-if="tableDIV2">

            <table class="table table-striped">
              <thead>

              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </tr>


        </tbody>
      </table>

    </div>

    <div v-if="tableDIV">

      <table class="table table-striped" style="width: auto" align="center">
        <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Group Balance</th>
          <th scope="col">Student balance</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="student in students">
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ balance.groupBalanceBalance }}</td>
          <td>{{ balance.balance }}</td>

          <td>
            <button v-on:click="getStudentBalanceById(student.studentId)" type="button" class="btn btn-warning">Show
              student balance log
            </button>
          </td>
          <div v-if="tableDIV2">

            <table class="table table-striped">
              <thead>
              <!--              <tr>-->
              <!--                <th scope="col">Group balance</th>-->
              <!--                <th scope="col">Student balance</th>-->

              <!--              </tr>-->
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </tr>

        <!--        <div v-if="tableDIV2">-->

        <!--          <table class="table table-striped" >-->
        <!--            <thead>-->
        <!--            <tr>-->
        <!--              <th scope="col">Group balance</th>-->
        <!--              <th scope="col">Student balance</th>-->

        <!--            </tr>-->
        <!--            </thead>-->
        <!--            <tbody>-->
        <!--            <tr>-->
        <!--              <td>{{ balance.groupBalanceBalance}}</td>-->
        <!--              <td>{{ balance.balance}}</td>-->
        <!--            </tr>-->

        <!--            </tbody>-->
        <!--          </table>-->
        <!--        </div>-->

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
      tableDIV2: true,
      studentBalanceLogTable: false,
      studentId: 0,
      id: 0,
      groupName: "",
      description: "",
      groupBalanceBalance: 0,
      userId: 0,
      students: {},
      studentBalanceLogs: {},
      balance: {},
      group:{},

      groupInfoRequest: {
        userId: sessionStorage.getItem('userId'),
        groupName: '',
        description: ''
      },

      roleId: {}
    }

  },

  methods: {

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
        // this.getStudentBalanceById();
        this.tableDIV = true
        console.log(response.data)
        console.log(response.data.firstName)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    getStudentBalanceLogByStudentId: function (studentId) {

      this.$http.get("/user/student-balance-log/student-id", {
            params: {
              studentId: this.studentId
            }
          }
      ).then(response => {
        alert("Õnnestus")
        this.studentBalanceLogTable = true
        this.studentBalanceLogs = response.data
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