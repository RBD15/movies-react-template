import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/plugins.css';
import './css/style.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import {reducer, selectGlobalState} from './reducers/';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  selectGlobalState: reducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const composedEnhancer = compose( window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__())

const store = configureStore({reducer: persistedReducer, middleware: [thunk]}, composedEnhancer);

// const composedEnhancer = compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ &&
// window.__REDUX_DEVTOOLS_EXTENSION__())
// const store = createStore(persistedReducer,composedEnhancer);


const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router>
          <App></App>
        </Router>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
