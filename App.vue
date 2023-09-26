<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <div class="left">
      <LeftBar />
    </div>
    <div class="main">
         <Main />
      </div>
    </div>
  </div>
</template>

<script> 
import Header from './components/Header.vue'
import LeftBar from './components/LeftBar.vue'
import Main from './components/Main.vue'
// import Main from './components/Main.vue'

export default {
  components: {
    Header,
    LeftBar,
    Main
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
  body {
    background-color: rgb(20, 20, 20);
    font-family: Arial, Helvetica, sans-serif;
  }

  .header {
    z-index: 1;
  }
  
  .container {
    width: 100%;
    height: 100vh;
  }

  .left {
    height: 100vh;
    width: 35%;
    z-index: 2;
  }

  .content {
    display: flex;
  }

  .main {
    width: 100%;
    height: 180vh;
  }
  
</style>