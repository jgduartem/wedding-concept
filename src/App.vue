<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import '../css/animate.css';
@import '../css/bootstrap.css';
@import '../css/flexslider.css';
@import '../css/icomoon.css';
@import '../css/magnific-popup.css';
@import '../css/owl.theme.default.min.css';
@import '../css/style.css';
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
