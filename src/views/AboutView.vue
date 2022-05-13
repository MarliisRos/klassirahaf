<template>
  <div>
    <div class="pealkiri">
      <h1>Klassiraha</h1>
    </div>
    <p class="par"> See tekst läheb pealehele <br> Klassiraha haladamine ei põhjusta enam peavalu</p>


    <div class="search">
      <input class="srch" type="search" name="" placeholder="Otsing">
      <button class="btn">Otsing</button>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  /*background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0.5) 50%), url(https://unsplash.com/photos/l3N9Q27zULw);*/
  background: url("https://unsplash.com/photos/l3N9Q27zULw");
  background-size: cover;
  height: 109vh;
}

.search {
  width: 330px;
  float: left;
  margin-left: 270px;
}

.srch {
  font-family: Monospace;
  width: 200px;
  height: 40px;
  background: transparent;
  border: 1px solid snow;
  margin-top: 13px;
  color: lightgray;
  border-right: none;
  font-size: 16px;
  float: left;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.btn {
  width: 100px;
  height: 40px;
  background: lightgray;
  border: 2px solid lightgray;
  margin-top: 13px;
  color: red;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.btn:focus {
  outline: none;
}

.srch:focus {
  outline: none;
}

.btn:hover {
  background-color: white;
}

.pealkiri.par {
  padding-left: 20px;
  padding-bottom: 25px;
  front-family: Arial;
  letter-spacing: 1.2px;
  line-heiht: 30px;
}

.pealkiri h1 {
  font-family: "Times New Roman";
  font-size: 50px;
  padding-left: 20px;
  margin-top: 9%;
  letter-spacing: 2px;
}

.pealkiri cn {
  width: 160px;
  height: 46px;
  background: rosybrown;
  border: none;
  margin-bottom: 10px;
  margin-left: 20px;
}
.pealkiri span {
  color: rosybrown;
  font-size: 60px;
}
</style>
