<template>


  <div>
    <input placeholder="Group name" v-model="groupInfoRequest.groupName"><br>
    <input placeholder="Description" v-model="groupInfoRequest.description"><br>
    <button v-on:click="createNewGroup">Create new group</button>
    <br>
    <br>

    <input placeholder="Group name" v-model="groupName"><br>
    <button v-on:click="getGroupByGroupName">Find Group by name</button>

    <br>
    <br>

<!--    <button v-on:click="getYourGroup">Find your groups</button>-->

    <div v-if="groupListDiv">
<!--      <input placeholder="Enter user id" v-model="userId "><br>-->
      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Group name</th>
          <th scope="col">Description</th>
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

  </div>




</template>

<script>
export default {
  data: function () {

    return {

      groupId: 0,
      yourGroups: {},
      groupListDiv: true,
      tableDIV: false,
      tableDIV2: true,
      studentBalanceLogTable: false,
      userId: sessionStorage.getItem('userId'),
      studentId: 0,
      id: 0,
      groupName: "",
      description: "",
      groupBalanceBalance: 0,
      students: {},
      studentBalanceLogs: {},
      balance: {},
      group: {},
      newStudent: {
        groupInfoId: 0,
        parentUserId: 0,
        firstName: '',
        lastName: '',
        dateOfBirth: Date

      },

      groupInfoRequest: {
        userId: sessionStorage.getItem('userId'),
        groupName: '',
        description: ''
      },

      roleId: {},


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

    createNewGroup: function () {

      this.$http.post("/expense/new-group", this.groupInfoRequest
      ).then(response => {
        alert("Grupi loomine õnnestus")
        this.roleId = response.data
        this.$router.push({name: 'moderatorRoute'})
        console.log(response.data)
      }).catch(error => {
        alert("Grupi loomine ei õnnestunud")
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
      }).catch(error => {
        alert("Ei õnnestunud")
        console.log(error)
      })
    },

    getGroupByGroupName: function () {

      this.$http.get("/user/group-by-name", {
            params: {
              groupName: this.groupName
            }
          }
      ).then(response => {
        this.group = response.data
        alert("sain grupi info")
        console.log(response.data)
      }).catch(error => {
        alert("Group with a name " + groupName + " not found!")
      })
    },

    toGroupDiv: function () {
      this.groupListDiv = false
    },

  },

  mounted() {
    this.getYourGroup()
  }
}


</script>

<style scoped>

</style>