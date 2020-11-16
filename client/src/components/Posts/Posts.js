import React from 'react';
import { useSelector } from 'react-redux'

import Post from './Post/Post'
import useStyle from './styles';

function Posts() {
    const posts = useSelector((state) => state.posts)
    const classes = useStyle();

    console.log(posts);
    return(
        <>
        <h1>POSTS</h1>
        <Post />
        </>
    );
}

export default Posts;