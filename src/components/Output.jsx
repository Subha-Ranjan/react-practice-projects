import React from 'react'
import {calculateInvestmentResults, formatter} from "../util/investment"
export default function Output({inputFromApp}) {
  // Requied Calculation done in "calculateInvestmentResultsr" function in another file 'investment.js' and input is paased, consequently Result is acquired
    let resultsData = calculateInvestmentResults(inputFromApp)

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
            //Required Calculation
              const totalInterest = r.valueEndOfYear -(r.annualInvestment*r.year) - inputFromApp.initialInvestment;
              const totalInvested = r.valueEndOfYear - totalInterest;
           return <tr>
                        <td>{r.year}</td>
                        <td>{formatter.format(r.valueEndOfYear)}</td> {/*to format numbers as currency(INR)*/}
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
