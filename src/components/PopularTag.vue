<template>
  <div>
      <h2>Most popular Tags</h2>
      <div v-for="tag in UniqueTags" :key="tag" class="tagg">
        <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: [ 'posts' ],
  setup(props){
    let tags = ref([]);
    console.log(props.posts)
    props.posts.forEach(post => {
      post.tags.forEach(tag => {
        tags.value.push(tag)
      })
    })

    let UniqueTags = tags.value.filter((tag,index,arr)=>{
      return arr.indexOf(tag) === index
    })

    return { tags , UniqueTags }
  }
}
</script>

<style scoped>
h2{
    color: #666;
    margin-top: -40px;
}
.tagg a{
  color: #fff;
  text-decoration: none;
}
</style>