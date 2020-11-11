import axios from 'axios'
import { logout } from './auth';

const transformRequest = (data, headers) => {
  let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  if (currentUser) { headers['Authorization'] = `Bearer ${currentUser.access_token}` }
  return data
}

const transformResponse = (data) => {
  const parsedData = JSON.parse(data);
  const { statusCode, message } = parsedData
  if (statusCode < 200 || statusCode >= 300) {
    // logout();
    throw new Error(message);
  }
  return parsedData
}

const configuredAxios = axios.create({
  baseURL: 'https://dzmz3u9yic.execute-api.us-east-2.amazonaws.com/dev',
  header: { 'Accept': 'application/json' },
  transformRequest: [transformRequest],
  transformResponse: [transformResponse]
})

export default configuredAxios