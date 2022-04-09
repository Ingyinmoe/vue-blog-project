<template>
    <div class="post">
        <h2 class="rec">Recent Post</h2>
        <div v-if="error">
            {{error}}
        </div>
        <div class="layout">
            <div>
                <div v-for="post in posts" :key="post.id">
                    <div v-if="posts.length>0">
                        <SinglePost :post="post"></SinglePost>
                    </div>
                    <div v-else>
                        <LoaderView></LoaderView>
                    </div>
                </div>
            </div>

            <div>
                <PopularTag :posts="posts"></PopularTag>
            </div>
        </div>
    </div>
</template>

<script>
import PopularTag from './PopularTag'
import LoaderView from './LoaderView'
import SinglePost from './SinglePost'
import GetPost from '../composable function/GetPost'

export default {
  components: {
    PopularTag,
    LoaderView, SinglePost },
    setup(){
        let { posts , error , load } = GetPost()
        
        load()

        return { posts , error }
    }
}
</script>

<style>
.rec{
    color: #666;
    margin: 4px 0 20px 0;
}
.post{
    padding: 40px;
}
</style>