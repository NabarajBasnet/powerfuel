import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDepartmentToggle: true,
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const MainRTKSclier = createSlice({
    name: 'rtkslicer',
    initialState,
    reducers: {
        ToggleAllDepartmentsState: (state) => {
            state.allDepartmentToggle = !state.allDepartmentToggle
        },

        addProductToCart: (state, action) => {
            const item = action.payload;
            const existingProduct = state.cartItems.find(cartItem => cartItem.id === item.id)

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice += item.price;
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1,
                    totalPrice: item.price
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += item.price
        },

        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
            }
        },

        decreaseItemQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }

    }
})

export const { ToggleAllDepartmentsState, addProductToCart, removeItemFromCart, decreaseItemQuantity, clearCart } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
