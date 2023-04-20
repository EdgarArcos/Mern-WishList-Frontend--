import axios from "axios";

export const getPostsRequests = async () => await axios.get('http://localhost:4000/posts')
export const createPostRequest = async (post) => {
    const form = new FormData();

    for (let key in post) {
        form.append(key, post[key]);
    }
    return await axios.post('http://localhost:4000/posts', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export const deletePostRequest = async _id => await axios.delete('http://localhost:4000/posts/' + _id)
export const getPostRequest = async _id => await axios.get('http://localhost:4000/posts/' + _id)
export const updatePostRequest = async (_id, newPost) => { await axios.put(`http://localhost:4000/posts/` + _id, newPost) }