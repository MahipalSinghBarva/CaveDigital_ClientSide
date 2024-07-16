import { GET_TRANSACTIONS, ADD_TRANSACTION, RETURN_BOOK, TRANSACTION_ERROR } from '../constants/TransacationConstants';

const initialState = {
    transactions: [],
};

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return { ...state, transactions: action.payload };
        case ADD_TRANSACTION:
            return { ...state, transactions: [...state.transactions, action.payload] };
            case RETURN_BOOK:
                return {
                    ...state,
                    transactions: state.transactions.filter(transaction => transaction._id !== action.payload._id),
                };
            case TRANSACTION_ERROR:
                return {
                    ...state,
                    error: action.payload,
                };
        default:
            return state;
    }
};
