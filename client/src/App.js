import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Service from './component/Service';
import Gallery from './component/Gallery';


function App() {
  return (
    <div className="App">
  
  
   <BrowserRouter>
   <Header />
  <Navbar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/service' element={<Service />}></Route>
    <Route path='/menu' element={<Gallery />}></Route>
    <Route path='/contact' element={<Contact />}></Route> 
   </Routes>
   <Footer />
   </BrowserRouter>
    </div>
  );
}

export default App;
