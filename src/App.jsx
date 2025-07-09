import { useState } from 'react'
import Home from './page/home/Home'
import Footer from './page/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

export default App
