<template>

<!--  <button type="button" class="btn btn-secondary">Secondary</button>-->

  <div>

    <div>

      <img src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg" alt="">
    </div>
    <br>

    <ul class="nav nav-tabs" id="myTab" role="tablist" style="alignment: center">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#groupStudent" role="tab" aria-controls="groupStudent" aria-selected="true">Sinu gruppi õpilased</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#registeredStudents" role="tab" aria-controls="registeredStudents" aria-selected="false">Registreeritud õpilased</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#addExpense" role="tab" aria-controls="addExpense" aria-selected="false">Kulude lisamine</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent" >
      <div class="tab-pane fade show active" id="groupStudent" role="tabpanel" aria-labelledby="groupStudent-tab">
        <br>
        <h5 class="card-title">Sinu gruppi õpilased</h5>
        <p class="card-text">Vali õpilased keda tahad gruppist eemaldada</p>
        <p class="card-text">Lisa raha õpilase bilanssile</p>
        <p class="card-text">Vaata õpilase vanemate kontaktandmed</p>


        <div >
        <div v-if="addMoneyDiv" class="card text-white bg-secondary mb-3" style="max-width: 18rem">
          <div class="card-header">Raha lisamine õpilase bilanssi</div>
          <div class="card-body">
            <h5 class="card-title">Sisesta raha kogus</h5>
            <input type="number" v-model="amount" name="" id="amount">
            <br>
            <br>
            <button v-on:click="addMoneyToStudent()">Lisa raha</button>
            <br>
            <br>
            <button v-on:click="addMoneyDiv = false">Pane aken kinni</button>
            <br>
          </div>
        </div>
        </div>

        <table class="table table-hover" style="width: fit-content" align="center" >
          <thead>
          <tr>
            <th scope="col">Eesnimi</th>
            <th scope="col">Perekonnanimi</th>
            <th scope="col">Bilanss</th>
            <th scope="col">Raha lisamine</th>
            <th scope="col">Vanemate kontaktandmed</th>
            <th scope="col">Eemalda gruppist</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="student in groupStudents">
            <td>{{ student.firstName }}</td>
            <td>{{ student.lastName }}</td>
            <td>{{ student.studentBalanceAmount }}</td>
            <td>
              <button v-on:click="toAddMoneyDiv(student.studentId)">Lisa raha</button>

            </td>
            <td>
              <button v-on:click="removeStudentsFromGroup()">Kontaktandmed</button>
            </td>
            <td>
              <input type="checkbox" name="" id="groupStudents" v-model="student.selected">
              <br>
            </td>
          </tr>

          </tbody>
        </table>

        <button v-on:click="removeStudentsFromGroup()" style="margin-left: 660px" >Eemalda gruppist</button>
        <br>
      </div>

      <div class="tab-pane fade" id="registeredStudents" role="tabpanel" aria-labelledby="registeredStudents-tab">
        <br>
      <h5 class="card-title">Õpilased, kes on registreeritud Teie gruppi</h5>
      <p class="card-text">Valige õpilasi keda tahate lisada oma gruppi</p>

        <button v-on:click="getRegisteredStudents">Find registered students</button>
        <br>
        <br>
        <input placeholder="Enter group id" v-model="groupId ">
        <br>
        <br>
        <table class="table table-hover" style="width:auto" align="center">
          <thead>
          <tr>
            <th scope="col">Eesnimi</th>
            <th scope="col">Perekonnanimi</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="registeredStudent in registeredStudents">
            <td>{{ registeredStudent.firstName }}</td>
            <td>{{ registeredStudent.lastName }}</td>
            <td>
              <input type="checkbox" name=""  v-model="registeredStudent.selected">
              <br>
              <!--            <button v-on:click="registerStudent(registeredStudent.studentId)">Register student to group</button>-->
            </td>
            {{ registeredStudent }}
            <br>
            <br>
          </tr>
          <button v-on:click="registerStudents()">Register students to group</button>
          <br>
          {{ registeredStudents }}
          </tbody>
        </table>
      </div>

      <div class="tab-pane fade" id="addExpense" role="tabpanel" aria-labelledby="addExpense-tab">
        <br>
        <h5 class="card-title">Uue kulu lisamine</h5>
        <p class="card-text">Lisa kõik kuludega seotud info siia</p>

        <div>
          <input placeholder="Expense name" v-model="expenseRequest.name ">
          <br>
          <br>
          <input placeholder="Expense description" v-model="expenseRequest.description ">
          <br>
          <br>
          <input type="number" v-model="expenseRequest.amount" name="" id="">
          <br>
          <br>
          <div>

            <button v-on:click="getGroupStudents">Show all group students students</button>
            <br>
            <br>
            <input placeholder="Enter group id" v-model="groupId "><br>
            <table class="table table-hover" style="width:auto" align="center">
              <thead>
              <tr>
                <th scope="col">Eesnimi</th>
                <th scope="col">Perekonnanimi</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="student in groupStudents">
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <td>
                  <input type="checkbox" name="" v-model="expenseRequest.students" v-bind:value="student">
                </td>
              </tr>
              <button v-on:click="addNewExpense()">Register new expense</button>
              <br>
              <br>
              {{ groupStudents }}
              <br>
              <br>
              {{ expenseRequest }}
              </tbody>
            </table>

          </div>
        </div>


        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
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


    <div v-if="groupListDiv">
      <h2> Find groups by by user Id</h2>
      <br>
      <button v-on:click="getYourGroup">Find your groups</button>
      <br>
      <br>
      <input placeholder="Enter user id" v-model="userId ">
      <br>
      <br>
      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Group name</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in yourGroups">
          <td>{{ group.groupName }}</td>
          <td>{{ group.description }}</td>
          <td>
            <button v-on:click="toGroupDiv" type="button" name="btn" class="btn btn-secondary btn-sm m-3">Vali grupp
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <br>
    <br>
    <br>

      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "Moderator",
  data: function () {

    return {
      addMoneyDiv: false,
      groupId: sessionStorage.getItem('groupId'),
      userId: sessionStorage.getItem('userId'),
      studentId: sessionStorage.getItem('studentId'),
      yourGroups: {},
      groupStudents: {},
      registeredStudents: {},
      studentsToRemove: {},
      amount: null,
      registeredStudentList: [],
      studentList: [],
      groupListDiv: true,
      expenseRequest: {
        groupId: sessionStorage.getItem('studentId'),
        name: '',
        description: '',
        amount: null,
        students: []

    }
    }
  },

  methods: {

    toAddMoneyDiv: function (studentId) {
      sessionStorage.setItem('studentId', studentId)
      this.addMoneyDiv = true
    },

    getGroupStudents: function () {
      this.$http.get("/moderator/all-students", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {
        this.groupStudents = response.data
        console.log(response.data)
      }).catch(error => {
      })
    },


    getRegisteredStudents: function () {
      this.$http.get("/moderator/all-registered-students", {
            params: {
              groupId: this.groupId
            }
          }
      ).then(response => {

        this.registeredStudents = response.data

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    registerStudent: function (studentId) {
      this.$http.get("/moderator/student-activation", {
            params: {
              id: studentId
            }
          }
      ).then(response => {
        alert("Tehtud")
        console.log(response.data)
        this.getRegisteredStudents()
      }).catch(error => {
        console.log(error)
      })
    },

    addMoneyToStudent: function () {
      // ALTERNATIVE
      // let someDtoObject = {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   idCode: this.idCode
      // }


      console.log(this.amount)

      // if using alternative then remove "this." from someDtoObject
      this.$http.put("/moderator/money-deposit",null, {
        params:{
            studentId: this.studentId,
            amount: this.amount
          }}
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


    addNewExpense: function () {
      this.$http.post("/moderator/new-expense", this.expenseRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    registerStudents: async function () {
      await this.$http.post("/moderator/students-activation", this.registeredStudents,
      ).then(response => {
        alert("Tehtud")
        console.log(response.data)
        this.getRegisteredStudents()

      }).catch(error => {
        console.log(error)
      })
    },

    removeStudentsFromGroup: async function () {
     await this.$http.post("/moderator/students-deactivation", this.groupStudents,
      ).then(response => {
        alert("Tehtud")
        console.log(response.data)
        this.getGroupStudents()
      }).catch(error => {
        console.log(error)
      })
    },


    removeStudentFromGroup: function (studentId) {
      this.$http.get("/moderator/student-deactivation", {
            params: {
              id: studentId,
            }
          }
      ).then(response => {
        alert("Tehtud")
        console.log(response.data)
        this.getGroupStudents()
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
  // mounted() {
  //   this.getGroupStudents()
  // }
}


</script>

<style scoped>

</style>