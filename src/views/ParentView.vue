<template>

  <div>
    <h1>Add new student to group</h1>
    <input placeholder="First name" v-model="newStudentInfo.firstName"><br>
    <input placeholder="Last name" v-model="newStudentInfo.lastName"><br>
    <input type="date" name="birthDate" v-model="newStudentInfo.dateOfBirth"><br>
    <button v-on:click="addNewStudent">Add new student</button>
    <br>
    <br>
    <br>
    <br>
    <br>

    <table class="table table-hover" style="width:auto" align="center">
      <thead>
      <tr>
        <th scope="col">First name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Group Balance</th>
        <th scope="col">Student balance</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students">
        <td>{{ student.firstName }}</td>
        <td>{{ student.lastName }}</td>
        <td>{{ balance.groupBalanceBalance }}</td>
        <td>{{ balance.balance }}</td>
        <td>
          <!--          <button v-on:click="selectGroup(group.groupId)" type="button" name="btn" class="btn btn-secondary btn-sm m-3">Vali grupp-->
          <!--          </button>-->
        </td>
      </tr>
      </tbody>
    </table>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


    <input placeholder="StudentId" v-model="id"><br>
    <button v-on:click="getStudentBalanceById">Get student balance info</button>
    <br>
    <br>
    <br>
    <br>
    <input placeholder="Get students by user id" v-model="userId"><br>
    <button v-on:click="getStudentByUserId">Get students by user id</button>
    <br>
    <br>
    <input placeholder="Get student balance log by student id" v-model="studentId"><br>
    <button v-on:click="getStudentBalanceLogByStudentId">Get student balance log by student id</button>


    <input placeholder="Student" v-model="id"><br>
    <button v-on:click="getStudentBalanceById">Add student to group</button>


    <div v-if="studentBalanceLogTable">

      <table className="table table-striped" style="width: auto" align="center">
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
          <td>{{ studentBalanceLog.transferName }}</td>
          <td>{{ studentBalanceLog.description }}</td>
          <td>{{ studentBalanceLog.amount }}</td>
          <td>{{ studentBalanceLog.type }}</td>
          <td>{{ studentBalanceLog.dateTime }}</td>

          <td>
            <button v-on:click="getStudentBalanceById(student.studentId)" type="button" className="btn btn-warning">Show
              student balance log
            </button>
          </td>
          <div v-if="tableDIV2">

            <table className="table table-striped">
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

      <table className="table table-striped" style="width: auto" align="center">
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
            <button v-on:click="getStudentBalanceById(student.studentId)" type="button" className="btn btn-warning">Show
              student balance log
            </button>
          </td>
          <div v-if="tableDIV2">

            <table className="table table-striped">
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
      date: new Date(),
      groupInfoId: sessionStorage.getItem('groupId'),
      parentUserId: sessionStorage.getItem('userId'),
      newStudentInfo: {
        groupInfoId: sessionStorage.getItem('groupId'),
        parentUserId: sessionStorage.getItem('userId'),
      },
      studentId: 0,
      id: 0,
      groupName: "",
      description: "",
      groupBalanceBalance: 0,
      userId: 0,
      students: {},
      student: {},
      studentBalanceLogs: {},
      balance: {},
      group: {},

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
        alert("sain õpilase balance")
        this.balance = response.data
        this.tableDIV2 = true
        alert("õpilase loomine õnnestus")
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    addNewStudent: function () {

      this.$http.post("/user/new-student", this.newStudentInfo
      ).then(response => {
        alert("õpilase loomine õnnestus")
        this.$router.push({name: 'userViewRoute'})
        console.log(response.data)
      }).catch(error => {
        alert("Kasutaja loomine ei õnnestunud")
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
        // alert("Õnnestus")
        this.students = response.data
        // this.getStudentBalanceById();
        // this.tableDIV = true
        console.log(response.data)
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
        this.studentBalanceLogTable = true
        this.studentBalanceLogs = response.data
        console.log(response.data)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },


  },

  // getYourGroup: function () {
  //
  //   this.$http.get("/expense/group-by-user-id", {
  //         params: {
  //           userId: this.userId,
  //         }
  //       }
  //   ).then(response => {
  //     this.yourGroups = response.data
  //     this.groupId = response.data.groupId
  //     sessionStorage.setItem('groupId', response.data.groupId)
  //     console.log(response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },


  mounted() {
    // this.getYourGroup()
    this.getStudentByUserId()
    this.getStudentBalanceById()
  },

}


</script>

<style scoped>

</style>