import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../interfaces/main";
import { IUserState } from "../interfaces/user";
import { usersData } from "../pages/homePage/constants";

const name="USERS";
const initialState={
    list:usersData
};

const usersSlice=createSlice({
    initialState,
    name,
    reducers:{

    }
 });
 export default usersSlice.reducer