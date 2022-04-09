<template>
  <div v-if="error">
      {{error}}
  </div>
  <div v-if="posts.length">
      <div class="layout">
        <div>
            <div v-for="post in filteredposts" :key="post" class="detail">
                <h2>{{post.title}}</h2>
                <div v-for="tag in post.tags" :key="tag" class="tagg">
                    <router-link :to="{name:'Tag',params:{tag:tag}}">{{tag}}</router-link>
                </div>
                <p>{{post.body}}</p>
                <div class="see">
                    <router-link :to="{name:'PostDetail',params:{id:post.id}}">Read More</router-link>
                </div>
            </div>
        </div>
        <div class="padd-20">
            <PopularTag></PopularTag>
        </div>
      </div>
  </div>
  <div v-else>
      <LoaderView></LoaderView>
  </div>
</template>

<script>
import PopularTag from '../components/PopularTag'
import LoaderView from '../components/LoaderView'
import PostView from '../components/PostView'
import { computed } from '@vue/runtime-core'
import GetPost from '../composable function/GetPost'

export default {
  components: {
    PopularTag,
    LoaderView, PostView },
    props:[ 'tag' ],
    setup(props){
        let { posts , error , load } = GetPost();
        load();

        let filteredposts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
                // console.log(post)
            })
        });
        return { posts , error , filteredposts }
    }
}
</script>

<style scoped>
.detail a{
    color: #fff;
    text-decoration: none;
}
.see a{
    color: #42b883;
    text-decoration: underline;
}
</style>