import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.log("error");
    return true; // If there's an error decoding the token, treat it as expired
  }
};
