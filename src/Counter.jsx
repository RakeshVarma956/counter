import React from 'react'
import { useReducer } from "react";

const reducerFn = (state,action)=>{
    if(action.type==="inc"){
      return{
        ...state,
        count: state.count + action.countValue,
      };
    }
    else if(action.type==="dec"){
      return{
        ...state,
        count:state.count - action.countValue,
      };
    } else if(action.type==="reset"){
      return {
        ...state,
        count:action.payload,
      };
    }
  return state;
};

const Counter = () => {
  const [state,dispatch] = useReducer(reducerFn,{count:0});
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>{state.count}</h1>

        <button className='button' onClick={()=>{dispatch({
          type:"inc",
          countValue:1,
        });
        }}><b>Increment</b></button>&nbsp;&nbsp;

        <button className='button' onClick={()=>{dispatch({
          type:"dec",
          countValue:1,
        });
      }}>  <b>Decrement</b> </button>&nbsp;&nbsp;


        <button className='button' onClick={()=>{dispatch({
          type:"reset",
          payload:0,
        });
        }}><b>Reset</b></button>
    </div>
  )
}

export default Counter