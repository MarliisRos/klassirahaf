<template>
  <div id="app">
    <nav>
<!--      <router-link to="/user">User</router-link> |-->
<!--      <router-link to="/login">Login</router-link> |-->
<!--      <router-link to="/parent">Parent</router-link> |-->
<!--      <router-link to="/moderator">Moderator</router-link> |-->
      <router-link  to="/logout">Log out</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 50%;
  /*background: url('https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg');*/
  background-size: cover;
  text-align: center;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
