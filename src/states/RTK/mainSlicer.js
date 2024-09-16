import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleAdminSidebar: true,
    allDepartmentToggle: true,
    toggleProductReviewForm: false,
    searchProductsQuery: '',
    cart: [],
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

        // Cart Management Logic
        AddToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id);
            console.log('Existing Product: ', existingProduct);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
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

export const { ToggleAllDepartmentsState, ToggleAdminSidebar, ToggleProductReviewForm, AddToCart, RemoveFromCart, ClearCart, IncreaseProductQuantityInCart, DecreaseProductQuantityInCart, SearchProducts } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
