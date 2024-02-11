import { useState,useEffect } from "react"

import io from "socket.io-client"
const socket = io.connect("http://localhost:3001/")

function App() {
  const [roomData, setRoomData] = useState("")
  const [inputData, setInputData]=useState("")
  const [messageReceived, setMessageReceived]=useState("")

  function joinRoom(){
    if(roomData!==""){
      socket.emit("join_room",roomData)
    }
  }
  function sendMessage(){
    socket.emit("send_message", {message:inputData, room:roomData}) 
  }
  useEffect(()=>{
    socket.on("received_message",(data)=>{
      console.log("Received BroadCasted data:",data)
      setMessageReceived(data.message)
  })},[socket])

  return (
    <div className="App">
      <input placeholder="Room No..." onChange={(e) => {setRoomData(e.target.value)}}/>
      <button onClick={joinRoom}> Join Room</button>

      
      <input placeholder="Message..." onChange={(e)=>{setInputData(e.target.value)}}/>
      <button onClick={sendMessage} >Send Message</button>
      <h1>Message Received:</h1><p>{messageReceived}</p>
    </div>
  );
}
export default App;
