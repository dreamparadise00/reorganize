<template>
  <div class="Middlet">
    <ul>
      <li><router-link to="/movie/top250">top250</router-link></li>
      <li><router-link to="/movie/hot">正在热映</router-link></li>
      <li><router-link to="/movie/coming">即将上映</router-link></li>

    </ul>
  </div>
</template>

<style>
  .Middlet{
    height: 1rem;
    background:rgb(33, 150, 243);
    position: fixed;
    top:1rem;
    width: 100%;
  }
  .Middlet ul{
    display: flex;
  }
  .Middlet li{
    width: 1rem;
    line-height: 1rem;
    float: left;
    flex: 1;
    text-align: center;
    color: #fff;
  }
  .Middlet li a{
    color: #ccc;
  }
  .Middlet li a.router-link-active{
    color: #fff;
  }
</style>
