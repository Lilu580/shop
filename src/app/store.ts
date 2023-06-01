import { configureStore } from '@reduxjs/toolkit';
import shopsReducer from '../features/shops';
import cartReducer from '../features/cart';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    shopCart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
