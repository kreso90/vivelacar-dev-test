import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

export default function SinglePost({match}) {

    const[postId, setPostId] = useState('')
    const[postTitle, setPostTitle] = useState('')
    const[postBody, setPostBody] = useState('')

    useEffect(() => {
        async function fetchItem(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then(res => {
            setPostId(res.data.id)
            setPostTitle(res.data.title)
            setPostBody(res.data.body)
        })
        }
        fetchItem();
       
    },[])

    return (
        <div>
            <Link to={"/"}><h1>&#8249; Back to post list</h1></Link>
            <div key={postId.id}>
                <h2>{postId}. {postTitle}</h2>
                {postBody}
            </div>
        </div>
    )
}
