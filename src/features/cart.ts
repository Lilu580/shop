import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/shop';


interface ShopCartState {
  products: Product[];
}

const initialState: ShopCartState = {
  products: JSON.parse(localStorage.getItem('cartProducts') || '[]'),
};

const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      if (!(state.products.find(product => product.id === action.payload.id))){
        state.products.push(action.payload);
        localStorage.setItem('cartProducts', JSON.stringify(state.products));
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(item => item.id !== action.payload);
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    clearCart: state => {
      state.products = [];
      localStorage.removeItem('cartProducts');
    },
  },
});

export const { addItem, removeItem, clearCart } = shopCartSlice.actions;
export default shopCartSlice.reducer;