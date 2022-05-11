<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Nimetus</th>
        <th scope="col">Selgitus</th>
        <th scope="col">Summa</th>
        <th scope="col">Aeg</th>
        <th scope="col"></th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="studentBalanceLog in studentBalanceLogs">
        <th scope="row">id</th>
        <td>{{ studentBalanceLog.transferName }}</td>
        <td>{{ studentBalanceLog.description }}</td>
        <td>{{ studentBalanceLog.amount }}</td>
        <td>{{ studentBalanceLog.dateTime }}</td>
        <td>
          <button type="button" class="btn btn-outline-dark" v-on:click="getAllExpenses" v-model="findStudentById"
                  (student.id)>Dark
          </button>
        </td>
      </tr>
      </tbody>

    </table>
  </div>

</template>

<script>
export default {

  name: `StudentBalanceLog`,
  data: function () {
    return {
      id: null,
      studentBalanceLog: {},
      studentBalanceLogs: {},
    };
  },
  methods: {


    getAllExpenses: function () {
      this.$http.get(`/student-balance-log/student-id`)
          .then(response => {
            this.studentBalanceLogs = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    }
  },

  findStudentById: function () {
    this.$http.get(`/user/student-by-user-id`, {
      params: {
        id: this.studentId
      }
    })
        .then(response => {
          this.customer = response.data
          console.log(response.data)

        })
        .catch(error => console.log(error))
  }
}

</script>

<style scoped>


</style>