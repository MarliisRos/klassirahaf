<template>


  <div class="wholePage">
    <div>
      <img
          src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg"
          alt="">
    </div>
    <br>

    <h3>Add new student to group</h3>
    <input placeholder="First name" v-model="newStudentInfo.firstName"><br>
    <input placeholder="Last name" v-model="newStudentInfo.lastName"><br>
    <input type="date" name="birthDate" v-model="newStudentInfo.dateOfBirth" v-on:keyup.enter="addNewStudent"><br>
    <button v-on:click="addNewStudent">Add new student</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div>
      <h1>Update parent info</h1>
      <input placeholder="First name" v-model="newParentInfo.firstName"><br>
      <input placeholder="Last name" v-model="newParentInfo.lastName"><br>
      <input placeholder="Email address" v-model="newParentInfo.email"><br>
      <input placeholder="Telephone number" v-model="newParentInfo.tel"><br>
      <input placeholder="Bank account number" v-model="newParentInfo.accountNumber"><br>
      <button v-on:click="updateParentInfo">Update parent info</button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
          <td v-if="studentBalanceLog.type.equals.charAt()">{{ studentBalanceLog.type }}</td>
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


      isActive: false,
      studentBalanceLogTable: false,
      groupExpenseLogTableBoolean: false,
      studentExpenseLogTable: false,

      expenses: {},
      groupExpenseLogTable: {},
      groupExpenseLogTables: {},
      students: {},
      student: {},
      studentBalanceLogs: {},
      balance: {},
      roleId: {},
      group: {},

      studentId: 0,
      id: 0,
      groupName: "",
      description: "",
      groupBalanceBalance: 0,

      date: new Date(),

      groupId: sessionStorage.getItem('groupId'),
      groupInfoId: sessionStorage.getItem('groupId'),
      parentUserId: sessionStorage.getItem('userId'),
      userId: sessionStorage.getItem('userId'),

      newStudentInfo: {
        groupInfoId: sessionStorage.getItem('groupId'),
        parentUserId: sessionStorage.getItem('userId'),
      },

      groupInfoRequest: {
        userId: sessionStorage.getItem('userId'),
        groupName: '',
        description: ''
      },

      newParentInfo: {
        userId: sessionStorage.getItem('userId'),
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        accountNumber: ''

      }

    }

  },

  methods: {

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


    updateParentInfo: function () {

      this.$http.post("/moderator/update-contact-info", this.newParentInfo
      ).then(response => {
        alert("õnnestus")
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



  },


  mounted() {
    this.getStudentByUserId()
  },

}

</script>

<style scoped>

/*h3 {*/
/*  color: violet;*/
/*  alignment: right;*/

/*}*/
/*.first {*/
/*  color: blueviolet;*/

/*}*/

/*.wholePage {*/
/*  background: bisque;*/
/*}*/


/*.table-hover {*/
/*  color: green;*/
/*}*/


</style>