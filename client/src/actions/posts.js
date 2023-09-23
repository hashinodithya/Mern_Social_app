import * as api from '../api';
// * import everything as api

//Action Creators -> are fuctions that return func
export const getPosts =()=> async(dispatch) => {
    try{
        const {data}= await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data});
    }catch (error){
        console.log(error.message);
    }

    
    // payload is our data we store our posts

    // redux thunck allows u to add additional function
    
}

export const createPost =(post)=>async(dispatch)=>{
    try{
        const {data}= await api.createPost(post);
        dispatch({type: 'CREATE', payload:data});

    }catch(error){
        console.log(error.message)
    }
}