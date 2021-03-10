import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   persistedReducer,
   {},
   composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { store, persistor };