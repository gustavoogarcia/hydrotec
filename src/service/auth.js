import jwt_decode from "jwt-decode";
import sha256 from 'js-sha256';
import http from '../service';

export function login ({ email, password }) {
  const encryptedPassword = sha256(password);
  return http.post('/login', { email, password: encryptedPassword })
    .then((res) => {
      const { data: { access_token } } = res
      const currentUser = jwt_decode(access_token);
      localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, access_token }));
      return currentUser;
    })
    .catch((err) => console.log(err))
};

export function logout (props) {
  props?.setCurrentUser()
  window.location.reload();
  return localStorage.removeItem('currentUser');
};