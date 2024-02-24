import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/App.scss'

import Home from './page/Home'
import Header from './component/Header'
import Footer from './component/Footer'



function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
