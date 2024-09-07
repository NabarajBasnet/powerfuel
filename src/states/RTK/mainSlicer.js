import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleAdminSidebar: false,
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
            state.allDepartmentToggle = !state.allDepartmentToggle;
        },
        ToggleAdminSidebar: (state) => {
            state.toggleAdminSidebar = !state.toggleAdminSidebar;
        }
    }
})

export const { ToggleAllDepartmentsState, ToggleAdminSidebar } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
