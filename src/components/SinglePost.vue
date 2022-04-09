<template>
    <div class="sin">
        <div class="tit">
            <h2>{{post.title}}</h2>
            <div v-for="tag in post.tags" :key="tag" class="tagg">
                <router-link :to="{name:'Tag',params:{tag:tag}}">{{tag}}</router-link>
            </div>
        </div>
        <p>{{post.body}}</p>
        <div class="see">
            <router-link :to="{name:'PostDetail',params:{id:post.id}}">Read More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:['post']
}
</script>

<style>
.tit{
    margin-bottom: 2px;
}
.tagg{
    font-size: 12px;
    color: #fff;
    background-color: #42b883;
    display: inline-block;
    margin-right: 4px;
    padding: 2px 6px;
    border-radius: 6px;
}
.sin{
    margin: 6px 0 40px 0;
    padding-bottom: 40px;
    border-bottom: 1px solid #666;
}
.sin a{
    color: #fff;
    text-decoration: none;
}
.see a{
    color: #42b883;
    text-decoration: underline;
}
</style>