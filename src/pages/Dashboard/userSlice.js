import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    isLoading:false,
    error:''
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getUserPending:(state)=>{
            state.isLoading=true
        },
        getUserSuccess:(state,{payload})=>{
            state.isLoading=false;
            state.user=payload;
            state.error=''
        },
        getUserFail:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload
        },
        resetUserState:(state)=>{
            state.user=initialState.user;
            state.isLoading=initialState.isLoading;
            state.error=initialState.error;
        }
    }
});

const {reducer,actions}=userSlice
export const {getUserPending,getUserSuccess,getUserFail,resetUserState}=actions;
export default reducer;