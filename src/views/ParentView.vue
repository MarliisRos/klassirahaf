<template>


  <div class="wholePage">

    <div align="left">
    <button v-on:click="toMainPage()" class="btn btn-light btn-sm m-1">Pealeheküljele
      </button>
    <button v-on:click="toUpdateContact()" class="btn btn-light btn-sm m-1" style="alignment: right">Uuenda
      kontaktandmed
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

    <div v-if="mainDiv">

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


      <!--    <div>-->
      <!--      <h1>Update parent info</h1>-->
      <!--      <input placeholder="First name" v-model="newParentInfo.firstName"><br>-->
      <!--      <input placeholder="Last name" v-model="newParentInfo.lastName"><br>-->
      <!--      <input placeholder="Email address" v-model="newParentInfo.email"><br>-->
      <!--      <input placeholder="Telephone number" v-model="newParentInfo.tel"><br>-->
      <!--      <input placeholder="Bank account number" v-model="newParentInfo.accountNumber"><br>-->
      <!--      <button v-on:click="updateParentInfo">Update parent info</button>-->
      <!--    </div>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->
      <!--    <br>-->


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


    <div v-if="updateContactDiv" align="center">

      <h4>Uuenda oma kontaktandmed</h4>
      <br>
      <br>
      <div align="center">
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Eesnimi</span>
          </div>
          <input type="text" v-model="contactRequest.firstName" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Perekonnanimi</span>
          </div>
          <input type="text" v-model="contactRequest.lastName" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">E-mail</span>
          </div>
          <input type="text" v-model="contactRequest.email" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Telefoninumber</span>
          </div>
          <input type="text" v-model="contactRequest.tel" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm">
        </div>

        <div class="input-group input-group-sm mb-3" style="width: 350px">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 135px">Pangakontonumber</span>
          </div>
          <input type="text" v-model="contactRequest.accountNumber" class="form-control"
                 aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <button v-on:click="updateContactInfo()" class="btn btn-secondary m-3">Uuenda kontaktandmed</button>
        <button v-on:click="toMainView()" class="btn btn-secondary">Tagasi</button>
      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: "ParentView",

  data: function () {

    return {

      updateContactDiv: false,
      mainDiv: true,
      isActive: false,
      studentBalanceLogTable: false,
      groupExpenseLogTableBoolean: false,
      studentExpenseLogTable: false,

      contactRequest: {
        id: sessionStorage.getItem('userId'),
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        accountNumber: ''
      },

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

    toMainPage: function () {
      this.$router.push({name: 'userViewRoute'})
    },

    toMainView: function () {
      this.updateContactDiv = false
      this.mainDiv = true
      this.contactRequest = {}
    },

    toUpdateContact: function () {
      this.mainDiv = false
      this.updateContactDiv = true
      this.getUserContactByUserId()

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

    getUserContactByUserId: function () {
      this.$http.get("/moderator/user-contact-info", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.contactRequest.firstName = response.data.firstName
        this.contactRequest.lastName = response.data.lastName
        this.contactRequest.accountNumber = response.data.accountNumber
        this.contactRequest.email = response.data.email
        this.contactRequest.tel = response.data.tel
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    updateContactInfo: function () {
      this.$http.put("/moderator/update-contact-info", this.contactRequest
      ).then(response => {
        alert("Kontaktandmed on uuendatud")
        this.updateContactDiv = false
        this.mainDiv = true
      }).catch(error => {
        console.log(error)
      })
    },

    // updateParentInfo: function () {
    //
    //   this.$http.post("/moderator/update-contact-info", this.newParentInfo
    //   ).then(response => {
    //     alert("õnnestus")
    //     console.log(response.data)
    //   }).catch(error => {
    //     alert("Kasutaja loomine ei õnnestunud")
    //     console.log(error)
    //   })
    // },

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