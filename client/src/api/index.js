import axios from 'axios';

const url ='http://localhost:5000/posts';

export const fetchPosts =()=> axios.get(url);

// adding redax . cz all our actions going to be done with redux

