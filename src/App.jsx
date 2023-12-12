import {useState} from 'react'

const App = () => {
  // State inits
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0) 
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  // Left click handling w/ 
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

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
