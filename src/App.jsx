import Header from "./components/Header"
import Output from "./components/Output"
import UserInput from "./components/UserInput"
import {useState} from 'react'
const initialData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration:10
}
function App() {
const [userInputData, setUserInputData] = useState(initialData);
const inputIsvalid = userInputData.duration >= 1;

function handleChange(inputIdentifier, newVal){
  setUserInputData((prevData)=>
  {
      return {...prevData, [inputIdentifier]: +newVal} // + --> int conversion
  }
  )
}
  return (
   <>
   <Header/>
   <UserInput onHandleChange={handleChange} userInputData={userInputData}/>
  {inputIsvalid ? <Output inputFromApp={userInputData}/> : <p className="center">Please Enter a Valid Duartion</p>}
   
   </>
  )
}

export default App
