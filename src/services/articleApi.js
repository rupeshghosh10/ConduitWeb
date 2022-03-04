import { getTokenConfig } from '../util/localStorageUtil';
import instance from './instance';

export const getArticles = async () => {
  const response = await instance.get('/article');
  return response.data;
}

export const postArticle = async data => {
  const response = await instance.post('/article', data, getTokenConfig());
  return response.data;
}
