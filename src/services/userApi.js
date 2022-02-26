import instance from './instance';

export const signin = async data => {
  const response = await instance.post('/user/login', data);
  return response.data;
}

export const signup = async data => {
  const response = await instance.post('/user', data);
  return response.data;
}
