import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './index.css';
import {Provider} from 'react-redux';
import { applyMiddleware , compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

//const store = configureStore(reducers , compose(applyMiddleware(thunk)))

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {store} >
      <App />
  </Provider>
  </React.StrictMode>
);

