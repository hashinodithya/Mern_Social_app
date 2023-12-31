
import PostMessage from "../models/postMessage.js"
import mongoose from 'mongoose'
export const getPosts =async (req,res)=>{
    try{
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

export const createPosts= async (req,res)=>{
    const post =req.body;

    const newPost =PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const updatePost= async(req, res)=>{
    const {id: _id} = req.params;
    const post = req.body;//updated data

    if (!mongoose.Types.ObjectId.isValid(_id))return req.status(404).send(`no post with that id`);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ...post, _id}, {new:true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) =>{
    const {id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return req.status(404).send(`no post with that id `);

    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'Post deleted'});
}

export const likePost = async(req, res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return req.status(404).send(`no post with that id `);

    const post = await PostMessage.findById(id);
    const updatePost = await PostMessage.findByIdAndUpdate(id, {likeCounts: post.likeCounts + 1},{new: true})

    res.json(updatePost);
}