"use client"
import { useState } from "react";

const Button = ()=>{
    const [numberOne,setNumberOne]=useState(0);
    const sum = ()=>{
        setNumberOne(numberOne+1)
   }
    return (
        <div>
             <button onClick={sum}>Add</button>
        </div>
    )
}

export default Button;