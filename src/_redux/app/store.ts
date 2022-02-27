import { configureStore } from '@reduxjs/toolkit';
import  conunterReducer  from '../features/main/mainSlice';


const store = configureStore({
    reducer: {
        counter: conunterReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;