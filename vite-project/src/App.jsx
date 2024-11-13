import { useState } from 'react'
import CreateResume from './Resume/CreateResume'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <CreateResume/>
     </div>
    </>
  )
}

export default App
