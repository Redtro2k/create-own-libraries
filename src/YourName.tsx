import React from "react";
export interface YourNameProps {
    inputName: string;
}
export function YourName({inputName}: YourNameProps){
    return <div>Hello {inputName}</div>
}