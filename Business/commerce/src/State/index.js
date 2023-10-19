// setting my redux i.e state management here

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => { //updates whats in the cart
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => { // remove whats in  the cart
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {  // change the number of the item
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                }

                return item;
            });
        },

        decreaseCount: (state, action) => {  // change the number of the item
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }

                return item;
            });
    },

    setCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen;
    }
}
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setCartOpen,
    
} = cartSlice.actions;


export default cartSlice.reducer;