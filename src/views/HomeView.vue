<template>
  <div class="home">
     <div>
       <PostView></PostView>
     </div>
  </div>
</template>

<script>



import PopularTag from '../components/PopularTag'
import PostView from '../components/PostView'
export default {
  components: {
    PopularTag, PostView },
}

</script>

<style>
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
.padd-20{
  padding: 20px;
}
</style>