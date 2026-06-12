import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
Homepage
function App() {

  return (
    <Routes>
     <Route path='/'>
      <Route index element={<Homepage/>}></Route>

     </Route>
     
    </Routes>
  )
}

export default App
