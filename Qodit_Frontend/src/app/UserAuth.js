import {createSlice} from '@reduxjs/toolkit'

export const UserAuthSlice= createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login: (state, action)=>{
            console.log(action)
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login , logout} = UserAuthSlice.actions

export const selectUser = (state)=> state.user

export default UserAuthSlice.reducer;