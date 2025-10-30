import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import WeddingCard from './Page/WeddingCard'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/card' element={<WeddingCard />} />
     </Routes>
    </>
  )
}

export default App
