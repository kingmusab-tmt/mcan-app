import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Original from './Original';
import Home from './Home';
import Donate from './Donate';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import BackgroundImage from './mcan-back.jpg'



 function App() {

  return (
    //BEM
    <Router>
    <div className="App container-fluid">
    <Navigation />
    <Routes>
    {['/', 'mcan-app'].map(path => <Route path={path} element={<Home />} />)}
      <Route path="/past_excutives" element={<Original />} />
    </Routes> 
    <Donate />
    <Footer />
     </div>
    </Router>
  );
}

export default App;
