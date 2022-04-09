<template>
  <div class="addpost">
        <h1>Add Post</h1>
        <form @submit.prevent="AddPost">
            <label>Title</label>
            <input type="text" required v-model="title">
            
            <label>Add Descraption</label>
            <textarea required v-model="body"></textarea>

            <label>Tags (More than one)</label>
            <input type="text" placeholder="enter to add" v-model="tag" @keydown.enter.prevent="addtag">

            <br>
            
            <div v-for="tag in tags" :key="tag" class="tag">
                {{tag}}
            </div>
            <button>Add a post</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    setup(){

        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);
        let router = useRouter();

        let addtag = ()=> {
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value = ""
        };

        let AddPost =async ()=> {
            await fetch('http://localhost:3000/posts',
            {method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(
                {
                    title:title.value,
                    body:body.value,
                    tags:tags.value
                })
            })
            router.push('/');
        };

        return { title , body , tag , tags , addtag , AddPost }
    }
}
</script>

<style>
.addpost{
    padding: 40px 100px;
}
label{
    display: block;
    color: #444;
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
}
input,textarea{
    color: #444;
    border: 1px solid #42b883;
    border-radius: 4px;
    font-size: 18px;
    padding: 8px 4px;
    width: 100%;
}
textarea{
    height: 60px;
}
button{
    display: block;
    outline: none;
    border: 1px solid #42b883;
    background: #42b883;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    padding: 4px 10px;
    margin-top: 20px;
    border-radius: 6px;
    width: 100%;
}
.tag{
    color: #fff;
    background: #42b883;
    font-size: 14px;
    display: inline-block;
    padding: 8px;
    border-radius: 20px;
    margin: 10px 10px 0 0;
}
</style>