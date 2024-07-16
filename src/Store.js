import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './reducers/UserReducer';
import { bookReducer } from './reducers/BookReducer';
import { transactionReducer } from './reducers/TransactionReducer';


const rootReducer = combineReducers({
  user: userReducer,
  books: bookReducer,
  transactions: transactionReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const persistor = persistStore(store);

export { store, persistor };
