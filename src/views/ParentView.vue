<template>

  <div>
    <h3>Add new student to group</h3>
    <input placeholder="First name" v-model="newStudentInfo.firstName"><br>
    <input placeholder="Last name" v-model="newStudentInfo.lastName"><br>
    <input type="date" name="birthDate" v-model="newStudentInfo.dateOfBirth"><br>
    <button v-on:click="addNewStudent">Add new student</button>
    <br>
    <br>



    <table class="table table-hover" style="width:auto" align="center">
      <thead>
      <tr>
        <th scope="col">First name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Student balance</th>
        <th scope="col">Group balance</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students">
        <td>{{ student.firstName }}</td>
        <td>{{ student.lastName }}</td>
        <td>{{ student.studentBalanceAmount }}</td>
        <td>{{ student.groupBalanceAmount }}</td>

        <td>
          <button v-on:click="getStudentBalanceLogByStudentId(student.studentId)" type="button" name="btn"
                  class="btn btn-secondary btn-sm m-3">
            Show student balance log
          </button>

          <button v-on:click="getGroupExpenses()" type="button" name="btn" class="btn btn-secondary btn-sm m-3">
            Group expense log
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <div v-if="studentBalanceLogTable">

      <table class="table table-hover" style="width:auto" align="center">
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

        </tr>


        </tbody>
      </table>

    </div>


    <div v-if="groupExpenseLogTableBoolean">

      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Kulu nimi</th>
          <th scope="col">Selgitus</th>
          <th scope="col">Summa</th>
          <th scope="col">Kuupäev</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="expence in expenses">
          <td>{{ expence.name }}</td>
          <td>{{ expence.description }}</td>
          <td>{{ expence.amount }}</td>
          <td>{{ expence.dateAndTime }}</td>
        </tr>
        <br>
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
      isActive: false,
      studentBalanceLogTable: false,
      groupExpenseLogTableBoolean: false,
      expenses: {},

      groupId: sessionStorage.getItem('groupId'),
      groupExpenseLogTable: {},
      groupExpenseLogTables: {},
      studentExpenseLogTable: false,
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
      userId: sessionStorage.getItem('userId'),
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
        this.students = response.data
        console.log(response.data)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    getStudentBalanceLogByStudentId: function (studentId) {

      this.$http.get("/user/student-balance-log/student-id", {
            params: {
              studentId: studentId
            }
          }
      ).then(response => {
        this.studentBalanceLogs = response.data
        // this.studentBalanceLogTable = true

        if (this.groupExpenseLogTableBoolean === true) {
          this.groupExpenseLogTableBoolean = false
        }

        if (this.studentBalanceLogTable === false) {
          this.studentBalanceLogTable = true
        } else {
          this.studentBalanceLogTable = false
        }
        console.log(response.data)
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },


    getGroupExpenses: function () {
      this.$http.get("/expense/expenses-by-group-id", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {
        // this.groupExpenseLogTableBoolean = true
        this.expenses = response.data

        if (this.studentBalanceLogTable === true) {
          this.studentBalanceLogTable = false
        }

        if (this.groupExpenseLogTableBoolean === false) {
          this.groupExpenseLogTableBoolean = true
        } else {
          this.groupExpenseLogTableBoolean = false
        }
      }).catch(error => {
        console.log(error)
      })
    },

    //
    // getGroupExpenseLogByGroupId: function () {
    //
    //   this.$http.get("/expense/expenses-by-group-id", {
    //         params: {
    //           groupId: this.groupId
    //         }
    //       }
    //   ).then(response => {
    //     alert("Õnnestus")
    //     this.groupExpenseLogTableBoolean = true
    //     this.groupExpenseLogTables = response.data
    //     console.log(response.data)
    //   }).catch(error => {
    //     alert("Ei õnnestunud")
    //     console.log(error)
    //   })
    // },


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
    // this.getStudentBalanceById()
  },

}


</script>

<style scoped>

</style>