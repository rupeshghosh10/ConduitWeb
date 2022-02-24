import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:5001/api/user/'
});

const signin = async (data) => {
  const response = await instance.post('login', data);
  return response.data;
}

export {
  signin
}