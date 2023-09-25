//reducer is fuction it accept the state and action
export default(posts=[], action)=>{
    //based onthe action type we do something
    //all ways there should be a state(here the state is posts)

    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;


        case 'CREATE':
            return [...posts, action.payload];
            // 1st- spread all posts, 2nd add new post and it saved in action payload

        case 'UPDATE':
            return posts.map((post)=>post._id===action.payload._id ? action.payload : post);
            //output of a map is an array

        case 'DELETE':
            return posts.filter((post)=> post._id !== action.payload )
        default:
            return posts;

    }
}