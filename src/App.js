import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListView from './pages/ListView'
import Details from './pages/Details'
import "./index.css";
import { Layout } from './pages/Layout';
import { useEffect } from 'react';
import Aos from 'aos';
function App() {
  useEffect(() => {
    Aos.init({
      offset:100,
      duration:9000,
      easing:"ease-in-sine",
      delay:100,
    });
    Aos.refresh();
  }, [])
  return (
    <>
     
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/details/:id" element={<Details />} />
      
      </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
