import instance from './instance';

export const getProfile = async username => {
  const response = await instance.get(`/profile/${username}`);
  return response.data
}
