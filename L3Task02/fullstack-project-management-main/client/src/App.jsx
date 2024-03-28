import React from 'react'
import Header from './components/Header/Header'
import Signup from './components/registration/Signup'
import Signin from './components/registration/Signin'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div>
     <Header/>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
