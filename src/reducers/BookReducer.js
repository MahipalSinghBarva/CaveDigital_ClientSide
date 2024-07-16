import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from "../constants/BookConstatns";

const initialState = {
    books: [],
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.payload };
        case ADD_BOOK:
            return { ...state, books: [...state.books, action.payload] };
        case DELETE_BOOK:
            return { ...state, books: state.books.filter(book => book._id !== action.payload) };
        default:
            return state;
    }
};