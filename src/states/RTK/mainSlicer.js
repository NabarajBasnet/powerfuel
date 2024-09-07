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
    }
})

export const { ToggleAllDepartmentsState } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
