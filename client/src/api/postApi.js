import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const getPosts = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/post');
    return response.data;
}

const addPost = (post) => {
    return axios.post('http://localhost:8080/api/v1/post', post);
}

export const useAddPostData = () => {
    const queryClient = useQueryClient();
    return useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries(['post'])
        }
    });
}




