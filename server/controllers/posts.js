import PostMessage from '../models/postMessage.js';

export const getPosts = (req, res) => {
    try {
        const PostMessages = await PostMessage.find();

        res.status(200).json(PostMessages);
    }
    catch(error) {
        res.status(404).json( {message: error.message});
    }
};
export const createPost = (req, res) => {
    res.send('Post Created !')
};