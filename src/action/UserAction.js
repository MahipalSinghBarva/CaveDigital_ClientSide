import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/UserConstants";


import axios from "axios"
import Cookies from "js-cookie";
import { baseURL } from "./baseurl";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post(`${baseURL}/api/user/login`, { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    console.log(data.user);

    Cookies.set("id", data.user._id);
    Cookies.set("token", data.token);
    localStorage.setItem("JWTToken", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));

  } catch (error) {
    console.error('Login failed: ', error.response.data.message);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
}

export const register = (username,
  email,
  password) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-type": "application/json" } };
      const { data } = await axios.post(`${baseURL}/api/user/register`, {
        username,
        email,
        password
      }, config);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem('JWTToken');
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  dispatch({ type: LOGOUT });
};