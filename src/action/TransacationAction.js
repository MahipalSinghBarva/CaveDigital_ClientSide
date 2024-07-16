import axios from 'axios';
import { GET_TRANSACTIONS, ADD_TRANSACTION, RETURN_BOOK, GET_TRANSACTIONS_FOR_USER, TRANSACTION_ERROR } from "../constants/TransacationConstants";

import Cookies from "js-cookie";
import {baseURL}  from './baseurl';

export const getTransactions = () => async dispatch => {
  const token = Cookies.get('token') || localStorage.getItem('JWTToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true
  };
  const response = await axios.get(`${baseURL}/api/transaction`, config);
  dispatch({ type: GET_TRANSACTIONS, payload: response.data });
};

export const addTransaction = (userId, bookId, dueDate) => async dispatch => {
  const token = Cookies.get('token') || localStorage.getItem('JWTToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true
  };
  const response = await axios.post(`${baseURL}/api/transaction/borrow`, { userId, bookId, dueDate }, config);
  dispatch({ type: ADD_TRANSACTION, payload: response.data });
};

export const returnBook = (transactionId) => async dispatch => {
  const token = Cookies.get('token') || localStorage.getItem('JWTToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true
  };
  const response = await axios.post(`${baseURL}/api/transaction/return/${transactionId}`, config);
  dispatch({ type: RETURN_BOOK, payload: response.data });
};

export const getTransactionsForUser = (userId) => async dispatch => {
  try {
    const token = Cookies.get('token') || localStorage.getItem('JWTToken');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    };
    const response = await axios.get(`${baseURL}/api/transaction/user/${userId}`, config);
    dispatch({ type: GET_TRANSACTIONS_FOR_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: TRANSACTION_ERROR, payload: error.response.data.message });
  }
};