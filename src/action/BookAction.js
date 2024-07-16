import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from "../constants/BookConstatns";

import axios from "axios"
import Cookies from "js-cookie";
import { baseURL } from "./baseurl";


export const getBooks = () => async dispatch => {
  const response = await axios.get(`${baseURL}/api/book`);
  dispatch({ type: GET_BOOKS, payload: response.data });
};

export const addBook = (bookData) => async dispatch => {
  const token = Cookies.get('token') || localStorage.getItem('JWTToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true 
  };
  const response = await axios.post(`${baseURL}/api/book/add`, bookData, config);
  dispatch({ type: ADD_BOOK, payload: response.data });
};

export const deleteBook = (id) => async dispatch => {
  const token = Cookies.get('token') || localStorage.getItem('JWTToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true
  };
  await axios.delete(`${baseURL}/api/book/delete/${id}`, config);
  dispatch({ type: DELETE_BOOK, payload: id });
};