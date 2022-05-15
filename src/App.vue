<template>
  <div id="app">
    <nav>
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/user">USER</router-link> |
      <router-link to="/login">LOGIN</router-link> |
      <router-link to="/parent">PARENT</router-link> |
      <router-link to="/moderator">MODERATOR</router-link> |
      <router-link to="/l">LOGOUT</router-link> |
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
