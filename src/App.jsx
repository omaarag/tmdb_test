import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='ubuntu flex flex-col gap-5 pb-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
