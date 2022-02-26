import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:5001/api/user/'
});

export const signin = async data => {
  const response = await instance.post('login', data);
  return response.data;
}

export const signup = async data => {
  const response = await instance.post('', data);
  return response.data;
}
