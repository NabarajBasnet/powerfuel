import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleAdminSidebar: true,
    allDepartmentToggle: true,
    toggleProductReviewForm: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
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
        }
    }
})

export const { ToggleAllDepartmentsState, ToggleAdminSidebar, ToggleProductReviewForm } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
