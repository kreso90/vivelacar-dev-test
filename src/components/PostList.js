import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

export default function PostList() {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchItem(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
        })
        }
        fetchItem();
    },[])

    return (
        <div>
            <h1>Post list</h1>
            <ul className="posts">
                {posts.slice(0, 10).map(post => (
                <li key={post.id} >
                    <Link to={`/singlepost/${post.id}`}>
                        <span className="post_number">{post.id}.</span><span className="post_title">{post.title}</span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>

    )
}
