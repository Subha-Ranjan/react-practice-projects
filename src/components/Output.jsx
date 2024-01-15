import React from 'react'
import {calculateInvestmentResults, formatter} from "../util/investment"
export default function Output({inputFromApp}) {
    let resultsData = calculateInvestmentResults(inputFromApp)
    console.log(inputFromApp);
    let InitialInvestment = inputFromApp.initialInvestment

  return (
    <div   >
        <table id="result">
          <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </thead>
          <tbody>
             { 
      
          resultsData.map((r)=> {
              const totalInterest = r.valueEndOfYear -(r.annualInvestment*r.year) - inputFromApp.initialInvestment;
              console.log("first:", InitialInvestment)
              const totalInvested = r.valueEndOfYear - totalInterest;
           return <tr>
                        <td>{r.year}</td>
                        <td>{formatter.format(r.valueEndOfYear)}</td>
                        <td>{formatter.format(r.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvested)}</td>

                    </tr>
                  })}

          </tbody>
          
        </table>
    </div>
  )
}
