import { saveCartToLocalStorage } from "@/utils/saveCartItemsInLocalStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleAdminSidebar: true,
    allDepartmentToggle: true,
    toggleProductReviewForm: false,
    searchProductsQuery: '',
    filterByPrice: [],
    filterByCategory: '',
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const MainRTKSclier = createSlice({
    name: 'rtkslicer',
    initialState,
    reducers: {
        ToggleAllDepartmentsState: (state) => {
            state.allDepartmentToggle = !state.allDepartmentToggle;
        },
        ToggleAdminSidebar: (state) => {
            state.toggleAdminSidebar = !state.toggleAdminSidebar;
        },
        ToggleProductReviewForm: (state) => {
            state.toggleProductReviewForm = !state.toggleProductReviewForm;
        },

        SearchProducts: (state, payload) => {
            state.searchProductsQuery = payload.payload;
        },

        FilterProductsByPrice: (state, payload) => {
            state.filterByPrice = payload.payload;
        },

        FilterByCategory: (state, payload) => {
            state.filterByCategory = payload.payload;
        },
        
        // Cart Management Logic
        AddToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.cart.push({
                    newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });

                state.totalQuantity++;
                state.totalPrice += newItem.price
            }
            else {
                // If item already exist 
                existingItem.quantity++,
                    existingItem.totalPrice += newItem.price;
                state.totalPrice += newItem.price;
            }
            saveCartToLocalStorage(state.cart);
        },

        AddToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.cart.push({
                    item: newItem,
                    quantity: 1
                })
            }
            else {
                existingItem.quantity++
            }
            saveCartToLocalStorage(state.cart);
        },


        RemoveFromCart: (state, payload) => {

        },
        ClearCart: (state, payload) => {

        },
        IncreaseProductQuantityInCart: (state, payload) => {

        },
        DecreaseProductQuantityInCart: (state, payload) => {

        }
    }
})

export const { ToggleAllDepartmentsState, ToggleAdminSidebar, ToggleProductReviewForm, AddToCart, RemoveFromCart, ClearCart, IncreaseProductQuantityInCart, DecreaseProductQuantityInCart, SearchProducts, FilterProductsByPrice, FilterByCategory } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
