<template>

  <div>
    <div class="form">
    <input placeholder="Klassi nimi" v-model="groupInfoRequest.groupName"><br>
    <input placeholder="Kirjeldus" v-model="groupInfoRequest.description"><br>
    <button v-on:click="createNewGroup" class="btnn"> Registreeri klass</button>
    <br>
    <br>
    <input placeholder="Klassi nimi" v-model="groupName"><br>
    <button v-on:click="getGroupByGroupName" class="btnn">Leia klass</button>
    <br>
    <br>
    </div>
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

.form {
  width: 290px;
  height: 420px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 0%);
  position: absolute;
  top: 200px;
  left:700px;
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
  font-size: 20px;
  letter-spacing: 1px;
  margin-top:20px;
  font-family: Sans-sarif;
}

.form input:focus {
  outline: none;
}

::placeholder {
  color: silver;
  font-family: Sans-sarif;
}

</style>