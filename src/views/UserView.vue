<template>

  <div>
    <div>
      <div class="form">
        <h2>Vali / registreeri KLASS</h2>
        <input placeholder="Klassi nimi" v-model="groupInfoRequest.groupName"><br>
        <input placeholder="Selgitus" v-model="groupInfoRequest.description" v-on:keyup.enter="createNewGroup"></input>
        <button v-on:click="createNewGroup()" class="btnn">Lisa uus klass</button>
        <input placeholder="Klassi nimi" v-model="groupName" v-on:keyup.enter="getGroupByGroupName" class="form-control">
        <button v-on:click="getGroupByGroupName()" class="btnn">Otsi klassi</button>
      </div>
      <br>
      <br>
    </div>
    <div v-if="groupListDiv">
      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Klassi nimi</th>
          <th scope="col">Selgitus</th>
          <th scope="col">Vali klass</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in yourGroups">
          <td>{{ group.groupName }}</td>
          <td>{{ group.description }}</td>
          <td>
            <button v-on:click="selectGroup(group.groupId)" type="button" name="btn" class="btn">
              Vali klass</button>
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
      isModerator: false,
      groupListDiv: true,
      userId: sessionStorage.getItem('userId'),
      roleId: sessionStorage.getItem('roleId'),
      studentId: sessionStorage.getItem('studentId'),
      groupName: "",
      description: "",
      yourGroups: {},
      group: {},
      groupByGroupId: {},
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
        if (response.data.isModerator) {
          this.$router.push({name: 'moderatorRoute'})
          this.groupId = response.data.groupId
          sessionStorage.setItem('groupId', response.data.groupId)
          console.log(response.data.isModerator)
        } else if (!response.data.isModerator) {
          this.$router.push({name: 'parentRoute'})
          this.groupId = response.data.groupId
          sessionStorage.setItem('groupId', response.data.groupId)
          console.log(response.data.isModerator)
        }
      }).catch(error => {
        console.log(error)
      })
    },

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
  top: 100px;
  left: 900px;
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
  margin-top: 20px;
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
  width: 240px;
  height: 40px;
  background: silver;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin-top: 20px;
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
  width: 100px;
  height: 40px;
  background: gainsboro;
  border: 2px solid lightgray;
  /*margin-top: 1px;*/
  color: chocolate;
  font-size: 15px;
  border-bottom-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  background-color: white;
}

</style>