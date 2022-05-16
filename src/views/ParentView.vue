<template>


  <div class="wholePage">

    <div align="left">
      <button v-on:click="toMainPage()" class="btn btn-light btn-sm m-1">Avalehele
      </button>
      <button v-on:click="toUpdateContact()" class="btn btn-light btn-sm m-1" style="alignment: right">Uuenda
        kontaktandmed
      </button>
      <br>
      <br>
    </div>
    <br>

    <div v-if="mainDiv">
<!--      <div align="right">-->
        <div class="form">
          <h2>Lisa laps klassi</h2>
          <input placeholder="Eesnimi"v-model="newStudentInfo.firstName">
          <input placeholder="Perekonnanimi"v-model="newStudentInfo.lastName">
          <p class="par"> Lisa sünnikuupäev</p>
<!--            v-model="newStudentInfo.dateOfBirth" v-on:keyup.enter="addNewStudent"</p>-->
          <div class="input-group input-group-sm mb-3" style="width: 250px">
<!--            <div class="input-group-prepend">-->
            <!--              <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 110px">Sündinud:</span>-->
            <!--            </div>-->
            <input type="date" v-model="newStudentInfo.dateOfBirth" v-on:keyup.enter="addNewStudent" class="form-control"
                   aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            <br>
            <button v-on:click="addNewStudent()" class="btnn">Salvesta andmed</button>
        </div>
      </div>

        <table class="table table-hover" style="width:auto" align="left">
          <thead>
          <tr>
            <th scope="col">Eesnimi</th>
            <th scope="col">Perekonnanimi</th>
            <th scope="col">Raha saldo</th>
            <th scope="col">Klassiraha saldo</th>
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
                      class="btnn">Lapse kulud</button>
              <button v-on:click="getGroupExpenses()" type="button" name="btn" class="btnn">Klassi kulud</button>
            </td>
          </tr>
          </tbody>
        </table>

        <div v-if="studentBalanceLogTable">
          <table class="table table-hover" style="width:auto" align="left">
            <thead>
            <tr>
              <th scope="col">Nimetus</th>
              <th scope="col">Selgitus</th>
              <th scope="col">Summa</th>
              <th scope="col">Tüüp</th>
              <th scope="col">Kuupäev</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="studentBalanceLog in studentExpenses">
              <td v-if="studentBalanceLog.type == 'i'" class="table-primary">{{ studentBalanceLog.transferName }}</td>
              <td v-else class="table-danger">{{ studentBalanceLog.transferName }}</td>
              <td v-if="studentBalanceLog.type == 'i'" class="table-primary">{{ studentBalanceLog.description }}</td>
              <td v-else class="table-danger">{{ studentBalanceLog.description }}</td>
              <td v-if="studentBalanceLog.type == 'i'" class="table-primary">{{ studentBalanceLog.amount }}</td>
              <td v-else class="table-danger">{{ studentBalanceLog.amount }}</td>
              <td v-if="studentBalanceLog.type == 'i'" class="table-primary">{{ studentBalanceLog.type }}</td>
              <td v-else class="table-danger">{{ studentBalanceLog.type }}</td>
              <td v-if="studentBalanceLog.type == 'i'" class="table-primary">{{ studentBalanceLog.dateTime }}</td>
              <td v-else class="table-danger">{{ studentBalanceLog.dateTime }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <!--      <div v-if="studentBalanceLogTable">-->
        <!--        <table class="table table-hover" style="width:auto" align="center">-->
        <!--          <thead>-->
        <!--          <tr>-->
        <!--            <th scope="col">Nimi</th>-->
        <!--            <th scope="col">Selgitus</th>-->
        <!--            <th scope="col">Summa</th>-->
        <!--            <th scope="col">Tüüp</th>-->
        <!--            <th scope="col">Kuupäev</th>-->
        <!--          </tr>-->
        <!--          </thead>-->
        <!--          <tbody>-->
        <!--          <tr v-for="studentBalanceLog in studentExpenses">-->
        <!--            <td>{{ studentBalanceLog.transferName }}</td>-->
        <!--            <td>{{ studentBalanceLog.description }}</td>-->
        <!--            <td>{{ studentBalanceLog.amount }}</td>-->
        <!--            <td>{{ studentBalanceLog.type }}</td>-->
        <!--            <td>{{ studentBalanceLog.dateTime }}</td>-->
        <!--          </tr>-->
        <!--          </tbody>-->
        <!--        </table>-->
        <!--      </div>-->

        <div v-if="groupExpenseLogTableBoolean">
          <table class="table table-hover" style="width:auto" align="left">
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
        <h4>Uuenda kontaktandmeid</h4>
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
          <button v-on:click="updateContactInfo()" class="btnn">Uuenda</button>
          <button v-on:click="toMainView()" class="btnn">Tagasi</button>
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
      studentExpenses: {},

      studentId: sessionStorage.getItem('studentId'),
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
        alert("õpilane lisatud klassi")
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
        this.studentExpenses = response.data
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
.form {
  width: 290px;
  height: 380px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 0%);
  position: absolute;
  top:150px;
  left: 1400px;
  border-radius: 20px;
  padding: 20px;
}

.form h2 {
  width: 240px;
  font-family: Sans-sarif;
  font-weight: bold;
  letter-spacing: 1.6px;
  text-align: center;
  color: chocolate;
  font-size: 22px;
  background-color: white;
  border-radius: 10px;
  margin: 2px;
  padding: 8px;
}

.form input {
  width: 240px;
  height: 35px;
  background: transparent;
  border-bottom: 1px solid silver;
  border-top: none;
  border-right: none;
  border-left: none;
  color: midnightblue;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 18px;
  font-family: Sans-sarif;
}

.form input:focus {
  outline: none;
}

::placeholder {
  color: silver;
  font-family: Sans-sarif;
}

.btnn {
  width: 180px;
  height: 40px;
  background: silver;
  border: 2px solid lightgray;
  border-radius: 10px;
  /*margin-top:5px;*/
  color: chocolate;
  font-size: 18px;
  transition: 0.4s ease;
}

.btnn:hover {
  background: white;
  color: chocolate;
}

.btnn a {
  color: chocolate;
  font-weight: bold;
}

.btn {
  width: 200px;
  height: 40px;
  background: white;
  border: 2px solid lightgray;
  /*margin-top: 13px;*/
  color: midnightblue;
  font-size: 15px;
  border-bottom-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  background-color: gainsboro;
}

.form par {
  font-family: Sans-sarif;
  font-size: 17px;
  padding-top: 20px;
  text-align: center;
  margin-top: 4px;
}

.form. par a {
  text-decoration: none;
  color: chocolate;
}
 .h4 {
  font-family:"Times New Roman";
  font-size: 45px;
  padding-left: 20px;
  margin-top: 2%;
  letter-spacing: 2px;
  color: chocolate;
}


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