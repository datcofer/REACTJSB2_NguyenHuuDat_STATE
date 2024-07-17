import { useState } from 'react'
import GlassesLayout from './components/BaiTapStateBuoi2/GlassesLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>tôi là header</h1> */}
      <GlassesLayout/>
    </>
  )
}

export default App
