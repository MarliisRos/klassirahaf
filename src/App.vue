<template>
  <div id="app">
    <nav align = "right">
<!--      <router-link to="/user">User</router-link> |-->
<!--      <router-link to="/login">Login</router-link> |-->
<!--      <router-link to="/parent">Parent</router-link> |-->
<!--      <router-link to="/moderator">Moderator</router-link> |-->
      <router-link  to="/logout" >Logi välja</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: midnightblue;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: midnightblue;
  color: midnightblue;
}
nav a.router-link-exact-active {
  color: chocolate;
  hover: chocolate;
}
</style>
