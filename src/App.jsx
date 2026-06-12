import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
Login
Homepage
function App() {

  return (
    <Routes>
     <Route path='/'>
      <Route index element={<Homepage/>}></Route>
    </Route>
    <Route path='/login' element={<Login/>}></Route>
     
    </Routes>
  )
}

export default App
