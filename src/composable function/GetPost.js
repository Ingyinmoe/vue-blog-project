import { ref } from '@vue/reactivity'

let GetPost = () => {

    let posts = ref([])
    let error = ref("")
    
    let load=async()=>{
        try{
            let response =await fetch('http://localhost:3000/posts')
            if(response.status === 404){
                throw new Error('Your URL is not avliable')
            }else{
                let realdatas =await response.json()
                posts.value = realdatas
            }
        }catch(err){
            error.value = err.message
        }
    }

    return { posts , error , load }

}
export default GetPost