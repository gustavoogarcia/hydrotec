import axios from 'axios'
import { logout } from './auth';

const transformRequest = (data, headers) => {
  let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  if (currentUser) { headers['Authorization'] = `Bearer ${currentUser.access_token}` };
  headers.post['Content-Type'] = 'application/json';
  return JSON.stringify(data)
}

const transformResponse = (data) => {
  if(data) {
    const parsedData = JSON.parse(data);
    const { statusCode, message } = parsedData
    if (statusCode === 401) { 
      logout();
      throw new Error(message);
    }
    if (statusCode < 200 || statusCode >= 300) {
      throw new Error(message);
    }
    return parsedData
  }
  return
}

const configuredAxios = axios.create({
  baseURL: 'https://dzmz3u9yic.execute-api.us-east-2.amazonaws.com/dev',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  transformRequest: [transformRequest],
  transformResponse: [transformResponse]
})

export default configuredAxios