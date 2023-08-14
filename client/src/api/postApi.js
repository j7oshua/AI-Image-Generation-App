import axios from 'axios';

const postApi = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
});

export const getPosts = async () => {
    const response = await postApi.get('/');
    return response.data;
}

export const addTodo = async (post) => {
    return await postApi.post('/post', post);
}


