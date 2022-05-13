<template>

</template>

<script>
export default {
  name: "logout",


  data: function () {

    return {
    }
  },

  methods: {

    signOut: function () {
      sessionStorage.clear()
      this.$router.push({name: 'loginRoute'})
      window.location.reload()
    }

  },

  mounted() {
    this.signOut()
  },

}


</script>

<style scoped>

</style>