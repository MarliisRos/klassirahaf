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


    <div>
      <h2> Find students by group id/remove students from group</h2>
      <br>
      <br>
      <button v-on:click="getGroupStudents">Find group students</button>
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
          <th scope="col">RAHA</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="student in groupStudents">
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.studentBalanceAmount }}</td>
          <td>
            <input type="checkbox" name="" id="groupStudents" v-model="student.selected">
            <br>
<!--            <button v-on:click="removeStudentFromGroup(student.studentId)">Remove student from group</button>-->
          </td>
        </tr>
        <button v-on:click="removeStudentsFromGroup()">Remove students from group</button>
        <br>
        {{groupStudents}}
        </tbody>
      </table>

    </div>
    <br>
    <br>
    <br>
    <div>
      <h2> Find registered students by group id/register(activate) students </h2>
      <br>
      <br>

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
            <input type="checkbox" name="" id="registeredStudent" v-model="registeredStudent.selected">
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
    <br>
    <br>
    <br>
    <div>

      <h2> Add money to student (by studentId)</h2>
      <br>
      <br>
      <input placeholder="Enter student id" v-model="studentId ">
      <br>
      <br>
      <!--      <input placeholder="Enter amount" v-model="amount"><br>-->
      <input type="number" v-model="amount" name="" id="amount">
      <br>
      <br>
      <button v-on:click="addMoneyToStudent()">Add money to student</button>
      <br>
      {{ studentId }}
      {{ amount }}
    </div>

    <br>
    <br>
    <br>
    <br>
    <div>
      <h2> Add new expense (groupId)</h2>
      <br>
      <br>
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

  </div>


</template>

<script>
export default {
  name: "Moderator",
  data: function () {

    return {
      groupId: 0,
      amount: null,
      userId: 0,
      // userId: sessionStorage.getItem('userId'),
      studentId: 0,
      yourGroups: {},
      groupStudents: {},
      registeredStudents: {},
      studentsToRemove: {},
      registeredStudentList: [],
      studentList: [],
      groupListDiv: true,
      expenseRequest: {
        groupId: 1,
        name: '',
        description: '',
        amount: 0,
        students: []

    }
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
        console.log(error)
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

    registerStudents: function () {
      this.$http.post("/moderator/students-activation", this.registeredStudents,
      ).then(response => {
        alert("Tehtud")
        console.log(response.data)
        this.getRegisteredStudents()

      }).catch(error => {
        console.log(error)
      })
    },

    removeStudentsFromGroup: function () {
      this.$http.post("/moderator/students-deactivation", this.groupStudents,
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
}


</script>

<style scoped>

</style>