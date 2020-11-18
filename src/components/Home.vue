<template>
  <div>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

    <section class="jumbotron">
      <h1>TommyGun</h1>
      <p>Large state Ethereum testnet generator.</p>
      <a class="button" href="#" @click="navToAccount">Getting started</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navToAccount() {
      this.$router.push({path: '/account'});
    },
  },
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.jumbotron {
  font-family: 'Montserrat', sans-serif;
  padding: 150px 0;
  /*background: url(../assets/home.jpg) center center;*/
  background: #000000;
  background-size: cover;
  text-align: center;
  color: #fff;
  position: relative;
}

.jumbotron h1 {
  font-size: 70px;
  margin-bottom: 0;
}

.jumbotron p {
  font-family: serif;
  font-size: 30px;
  font-style: italic;
  margin: 0 0 30px;
}

.button {
  display: inline-block;
  border: 2px solid #fff;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.button:hover {
  background: #fff;
  color: #000;
}
</style>