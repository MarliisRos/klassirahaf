<template>


  <div>
    <div>
      <img
          src="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg"
          alt="">
    </div>
    <br>
    <h3>Registreeri uus grupp</h3>
    <br>
    <br>
    <div align="center">
    <div class="input-group mb-3" style="width: 300px" >
      <div class="input-group-prepend">
        <span class="input-group-text">Gruppi nimi</span>
      </div>
      <input type="text" v-model="groupInfoRequest.groupName" class="form-control">
    </div>
    <div class="input-group mb-3" style="width: 300px">
      <div class="input-group-prepend">
        <span class="input-group-text">Selgitus</span>
      </div>
      <input type="text" v-model="groupInfoRequest.description" v-on:keyup.enter="createNewGroup" class="form-control">
    </div>
    <button v-on:click="createNewGroup()" class="btn btn-secondary">Loo uus grupp</button>
    <br>
    <br>
    <br>
    <br>
    </div>

    <h3>Otsi grupp lapse registreerimiseks</h3>
    <br>
    <br>
    <div align="center">
    <div class="input-group mb-3" style="width: 300px">
      <div class="input-group-prepend">
        <span class="input-group-text">Gruppi nimi</span>
      </div>
      <input type="text" v-model="groupName" v-on:keyup.enter="getGroupByGroupName" class="form-control">
    </div>
    <button v-on:click="getGroupByGroupName()" class="btn btn-secondary">Otsi grupp</button>
    <br>
    <br>
    <br>
    <br>
    </div>


    <h3>Sinuga seotud grupid</h3>
    <br>
    <br>
    <div v-if="groupListDiv">
      <table class="table table-hover" style="width:auto" align="center">
        <thead>
        <tr>
          <th scope="col">Gruppi nimi</th>
          <th scope="col">Selgitus</th>
          <th scope="col">Vali grupp</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in yourGroups">
          <td>{{ group.groupName }}</td>
          <td>{{ group.description }}</td>
          <td>
            <button v-on:click="selectGroup(group.groupId)" type="button" name="btn" class="btn btn-secondary btn-sm">Vali grupp
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
        } else if (!response.data.isModerator){
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

</style>