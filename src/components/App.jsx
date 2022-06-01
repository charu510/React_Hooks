import React, {useState} from "react"

function App(){
    //getting the present state using the concept of destructuring the element
    const [count, setCount] = useState(0);

    //making the increase function
    function increase(){
        setCount(count+1)
    }

    //making the decreasing function
    function decrease(){
        setCount(count-1)
    }
    


    //making the rendering function
    return (
        <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>
    )
}

export default App;