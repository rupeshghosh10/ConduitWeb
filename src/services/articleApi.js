import instance from './instance';

export const getArticles = async () => {
  const response = await instance.get('/article');
  return response.data;
}