import React from "react";
export interface YourAgeProps {
     age: number;
};
export function YourAge({age}: YourAgeProps){
    return <div>Your Age is {age}</div>
}