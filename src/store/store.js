import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import poemReducer from './features/poem/poemSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        poem: poemReducer
    }
});

export default store;