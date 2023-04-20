import axios from "axios";

export const getPostsRequests = async () => await axios.get('http://localhost:4000/posts')
export const createPostRequest = async (post) => await axios.post('http://localhost:4000/posts', post)
export const deletePostRequest = async _id => await axios.delete('http://localhost:4000/posts/' + _id)
export const getPostRequest = async _id => await axios.get('http://localhost:4000/posts/' + _id)