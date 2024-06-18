import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import User from "./main.json"

export const Slice=createSlice(
    {
        name:"todolist",
        initialState:{
            array:User.array,
            IsArray:[]
        },
        reducers:{
          isArray:(state,action)=>{
            state.IsArray=action.payload
          },
          Array:(state,action)=>{
            state.array=action.payload
          }
        }
    }
)

export default Slice.reducer
export const{isArray,Array} =Slice.actions