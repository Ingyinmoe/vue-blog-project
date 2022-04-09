<template>
  <div class="detail">
      <h2>{{post.title}}</h2>
        <div v-for="tag in post.tags" :key="tag" class="tagg">
            {{tag}}
        </div>
      <p>{{post.body}}</p>
  </div>
</template>

<script>

import GetSingle from '../composable function/GetSingle'

export default {
    props:['id'],

    setup(props){

        let { post , load } = GetSingle(props.id);

        load()

        return { post }
    }
}
</script>

<style>
.detail{
    padding: 40px;
}
</style>