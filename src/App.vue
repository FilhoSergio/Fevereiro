<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<style>
@font-face {font-family: "Visby Round CF Medium"; 
src: url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.eot"); 
src: url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.eot?#iefix") 
format("embedded-opentype"),
url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.woff2")
format("woff2"), url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.woff") 
format("woff"), url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.ttf") 
format("truetype"),
url("//db.onlinewebfonts.com/t/85c11596f04944470089a2cae2d7d298.svg#Visby Round CF Medium") 
format("svg"); }
#app {
  font-family: "Visby Round CF Medium";
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
