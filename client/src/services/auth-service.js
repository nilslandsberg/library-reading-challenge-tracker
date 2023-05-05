import axios from 'axios';

const API_URL = "http:localhost:8000/api/users/";

const signup = (username, email, password) => {
  const signUpRequest = { 
    username: username,
    email: email,
    password: password,
  }
  return axios.post(API_URL + "signup", signUpRequest  
  );
};

const login = (username, password) => {
  return axios.post(API_URL + "login", {
    username: username,
    password: password
  })
  .then((response) => {
    
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data.user;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  logout,
}

export default authService;