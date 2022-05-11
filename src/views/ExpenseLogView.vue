<template>
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
    <tr v-for="expense in expenses">
      <th scope="row">1</th>
      <td>{{expense.name}}</td>
      <td>{{expense.description}}</td>
      <td>{{expense.amount}}</td>
      <td>{{expense.dateTime}}</td>
    </tr>
    </tbody>

  </table>

</template>

<script>
export default {
  name: `ExpenseLog`,
  data: function () {
    return {
      id: null,
      expense: {},
      expenses: {},
    };
  },
  methods: {
    getAllExpenses: function () {
      this.$http.get()
    }
  }


}
</script>

<style scoped>

</style>