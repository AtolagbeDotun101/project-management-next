import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react'

export interface initialStateTypes {
    isSidebarCollapsed : boolean,
    isDarkMode :boolean
}

const initialState: initialStateTypes = {
    isSidebarCollapsed:false,
    isDarkMode: false
};

export const globalState = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>)=>{
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode:(state, action: PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload;
        }
    }
})

export const {setIsSidebarCollapsed, setIsDarkMode} = globalState.actions;
export default globalState.reducer;