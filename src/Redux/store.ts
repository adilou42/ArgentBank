import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer'; // Adjust the path as needed
import userReducer from './reducers/userReducer'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Export the type for the RootState for use with useSelector
export type RootState = ReturnType<typeof rootReducer>;

export default store;
