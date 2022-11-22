
import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./interfaces/main";
import { IMyAnswerState } from "./interfaces/myAnswer";

const name = "MY_ANSWER";

const initialState: IMyAnswerState = {
  myAnswerList: [],
};

const myAnswerSlice = createSlice({
  initialState,
  name,
  reducers: {
    addMyAnswer: (state,{payload:{id,myAnswer}}) => {
      const newAnswer ={id,myAnswer}
      const newList=[...state.myAnswerList,newAnswer]
      state.myAnswerList=newList
    },
  },
});
export const { addMyAnswer } = myAnswerSlice.actions;
export const selectMyAnswer = (state: IState) => state.myAnswer.myAnswerList;

export default myAnswerSlice.reducer;
