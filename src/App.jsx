import {useState} from 'react'

const App = () => {
  // State inits
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0) 
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  // Left click handling w/ state batching in mind
  const handleLeftClick = () => {
    setAll(allClicks.concat('L')) // Use non-mutating method for the state setter
    const updatedLeft = left + 1  // Use a temporary variable to hold the state value
    setLeft(updatedLeft)          // State setter for left, using that temp variable
    setTotal(updatedLeft + right) // Use the temporary state variable and combine with right
  }

  // Right click handling w/ state batching in mind
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  // Render method
  return (
    <div>
      {left} 
      <button onClick = {handleLeftClick}>Left</button>
      <button onClick = {handleRightClick}>Right</button>
      {right}

      <p>Total clicks: {total}</p>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App