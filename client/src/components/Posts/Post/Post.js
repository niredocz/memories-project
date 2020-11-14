import React from 'react';
import useStyle from './style';

function Post() {
    const classes = useStyle();
    return(
        <h1 className={classes.card}>POST_1</h1>
    );
}

export default Post;