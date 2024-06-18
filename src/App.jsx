import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home.1.jsx";
import Header from './components/Header/Header.jsx';
import Footer from './components/Items/Footer/Footer.jsx';
import Contacto from './components/Pages/Contacto/Contacto.jsx';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
