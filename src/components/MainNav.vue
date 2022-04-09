<template>
  <div class="nav">
      <h2>Burmese Teach Hub.blog</h2>

      <nav>
          <router-link :to="{name:'home'}">Home</router-link>
          <router-link :to="{name:'CreatePost'}">Create Post</router-link>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    display: flex;
    justify-content: space-between;
    padding: 40px;
}
.nav h2{
    display: block;
    font-size: 24px;
    color: #444;
}
.nav a{
    color: #444;
    margin: 0 6px;
    text-decoration: none;
}
</style>