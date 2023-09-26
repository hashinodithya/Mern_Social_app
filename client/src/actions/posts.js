import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../constants/actionTypes';
import * as api from '../api';
// * import everything as api

//Action Creators -> are fuctions that return func
export const getPosts =()=> async(dispatch) => {
    try{
        const {data}= await api.fetchPosts();
        dispatch({type:FETCH_ALL, payload:data});
    }catch (error){
        console.log(error.message);
    }

    
    // payload is our data we store our posts

    // redux thunck allows u to add additional function
    
}

export const createPost =(post)=>async(dispatch)=>{
    try{
        const {data}= await api.createPost(post);
        dispatch({type: CREATE, payload:data});

    }catch(error){
        console.log(error.message)
    }
}

export const updatePost =(id, post)=> async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id, post);

        dispatch ({type:UPDATE, payload: data});
    }catch(error){
        console.log(error.message);
    }
}

export const deletePost =(id)=> async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    }catch(error){
        console.log(error)
    }
}

export const likePost = (id)=> async (dispatch)=>{
    try{
        const {data}= await api.likePost(id);

        dispatch({type:UPDATE, payload:data})
    }catch(error){
        console.log(error)
    }
}