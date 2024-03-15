import { Route } from 'react-router-dom'
import './App.css'
import Navigation from './Components/Navigation'
import Overskrift from './Components/Overskrift'
import foto from './img/strand.jpg'
import Forside from './Pages/Forside'


function App() {
  

  return (
    <>
    <Navigation/>
      <Route path="/" element={<Forside />} />
    </>
  )
}

export default App
