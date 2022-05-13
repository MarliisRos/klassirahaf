<template>
  <div id="app">
    <nav>
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/user">USER</router-link> |
      <router-link to="/login">LOGIN</router-link> |
      <router-link to="/parent">PARENT</router-link> |
      <router-link to="/moderator">MODERATOR</router-link> |
      <router-link to="/l">LOGOUT</router-link> |
      <router-link to="/test">TEST</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Times New Roman";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  color: red;
}
nav a.router-link-exact-active {
  color: #2c3e50;
  hover: #2c3e50;
}
</style>
