import { ref } from "vue";

let GetSingle = (id) => {

    let post = ref(null);
    
    let load = async () => {

        try{
            let response = await fetch('http://localhost:3000/posts'+'/'+id);
            if(response.status === 404 ){
                throw new Error('Web Page is not found')
            }
            let realdata = await response.json();
            post.value = realdata;
        }
        catch(err){
            alert(err.message);
        }

    }

    return { post , load }

}
export default GetSingle;