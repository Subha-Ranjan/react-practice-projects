import React, { useState } from "react";


export default function UserInput({ onHandleChange, userInputData }) {
    

    console.log(userInputData)
  return (
    <div id="user-input">
      <sec className="input-group">
        <p>
          <label>INITIAL AMOUNT</label>
          <input type="number" required  value={userInputData.initialInvestment} onChange={(e)=>onHandleChange("initialInvestment",e.target.value)}/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required value={userInputData.annualInvestment} onChange={(e)=>onHandleChange("annualInvestment",e.target.value)}/>
        </p>
      </sec>

      <sec className="input-group">
        <p>
          <label>Expected RETURN</label>
          <input type="number" required value={userInputData.expectedReturn} onChange={(e)=>onHandleChange("expectedReturn",e.target.value)}/>

        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required value={userInputData.duration} onChange={(e)=>onHandleChange("duration",e.target.value)}/>
        </p>
      </sec>
    </div>
  );
}
