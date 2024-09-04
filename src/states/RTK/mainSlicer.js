import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDepartmentToggle: true,
};

const MainRTKSclier = createSlice({
    name: 'rtkslicer',
    initialState,
    reducers: {
        ToggleAllDepartmentsState: (state) => {
            state.allDepartmentToggle = !state.allDepartmentToggle
        }
    }
})

export const { ToggleAllDepartmentsState } = MainRTKSclier.actions;
export default MainRTKSclier.reducer
