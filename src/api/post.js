import axios from "axios";

export const getPostsRequests = async () => await axios.get('http://localhost:4000/posts')
export const createPostRequest = async (post) => await axios.post('http://localhost:4000/posts', post)