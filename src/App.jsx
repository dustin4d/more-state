import {useState} from 'react'

const App = () => {
  // Use single obj instead of separate state
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // Create two click handlers, and increment the corresponding left/right based on click
  // then use the state setter function on em.
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left} 
      <button onClick = {handleLeftClick}>Left</button>
      <button onClick = {handleRightClick}>Right</button>
      {clicks.right}
    </div>
  )
}

export default App