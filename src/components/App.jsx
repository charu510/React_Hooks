import React,{useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  
  //capturing the value and the function using the useState
  const [t,setTime] = useState(time);

  //creating the function for updating the time onClick
  function updateTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //making the function for dynamically updating the time
  setInterval(updateTime,1000)
  return (
    <div className="container">
      <h2>{t}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
