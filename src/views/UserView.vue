<template>


  <div>
    <input placeholder="Group name" v-model="groupInfoRequest.groupName"><br>
    <input placeholder="Description" v-model="groupInfoRequest.description"><br>
    <button v-on:click="createNewGroup">Create new group</button>
    <br>
    <br>

    <input placeholder="Group name" v-model="groupName"><br>
    <button v-on:click="getGroupByGroupName">Find and join group</button>
    <br>
    <br>


    <br>
    <br>


    <div v-if="groupListDiv">
      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Group name</th>
          <th scope="col">Description</th>
          <th scope="col">Select group</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in yourGroups">
          <td>{{ group.groupName }}</td>
          <td>{{ group.description }}</td>
          <td>
            <button v-on:click="selectGroup(group.groupId)" type="button" name="btn" class="btn btn-secondary btn-sm m-3">Vali grupp
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

      foundGroupBoolean : false,
      isModerator: false,
      yourGroups: {},
      groupListDiv: true,
      tableDIV: false,
      tableDIV2: true,
      userId: sessionStorage.getItem('userId'),
      roleId: 0,
      studentId: 0,
      id: 0,
      groupName: "",
      description: "",
      groupBalanceBalance: 0,
      students: {},
      studentBalanceLogs: {},
      balance: {},
      group: {},
      groupByGroupId: {},
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
        location.reload()
        // this.$router.push({name: 'moderatorRoute'})
        console.log(response.data)
      }).catch(error => {
        alert("Grupi loomine ei õnnestunud")
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
        this.groupId = response.data.groupId
        sessionStorage.setItem('groupId', response.data.groupId)
        this.$router.push({name: 'parentRoute'})

        console.log(response.data)
      }).catch(error => {
        alert("Group with a name " + this.groupName + " not found!")
      })
    },

    selectGroup: function (groupId) {
      this.$http.get("/expense/group-by-group-id", {
        params: {
          groupId: groupId,
          userId: this.userId
        }
          }
      ).then(response => {
        this.group = response.data
        // sessionStorage.setItem('groupId', response.data.groupId)
        // sessionStorage.setItem('roleId', response.data.groupId)
        // this.isModerator = response.data.isModerator

        if (response.data.isModerator) {
          this.$router.push({name: 'moderatorRoute'})
          this.groupId = response.data.groupId
          sessionStorage.setItem('groupId', response.data.groupId)
          console.log(response.data.isModerator)
        } else if (!response.data.isModerator){
          this.$router.push({name: 'parentRoute'})
          this.groupId = response.data.groupId
          sessionStorage.setItem('groupId', response.data.groupId)
          console.log(response.data.isModerator)
        }
        // console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },

  foundGroup: function () {
    this.foundGroupBoolean = true
  },

  mounted() {
    this.getYourGroup()
  }
}


</script>

<style scoped>

</style>