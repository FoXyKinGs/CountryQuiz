<template>
  <div id="app">
    <div class="box1"></div>
    <div class="box2"></div>
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5256a0;
    overflow: hidden;
  }

  .box1{
    z-index: -2222;
    position: absolute;
    background-color: #5c62c4;
    width: 1200px;
    height: 500px;
    left: -150px;
    bottom: -200px;
    transform: rotate(20deg);
    border-radius: 25px;
  }

  .box2{
    z-index: -2223;
    position: absolute;
    background-color: #5c62c4;
    width: 700px;
    height: 500px;
    top: -100px;
    right: -100px;
    transform: rotate(20deg);
    border-radius: 25px;
  }
</style>
