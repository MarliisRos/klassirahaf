<template>

  <div>

    <input placeholder="Enter Group id" v-model="groupId"><br>
    <button v-on:click="getAllStudentsByGroupId">Enter</button>
    <br>
    <br>
    <br>


  </div>


</template>

<script>
export default {
  name: "Moderator",
  data: function () {

    return {

      groupId: "",
    }

  },

  methods: {

    getAllStudentsByGroupId: function () {

      this.$http.get("/moderator/all-students", {
            params: {
              groupId: this.groupId,

            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  }
}


</script>

<style scoped>

</style>