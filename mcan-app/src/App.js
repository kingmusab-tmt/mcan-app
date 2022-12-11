import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Dawaah from './Dawaah';
import News from './News';
import Executives from './Executives';
// import BackgroundImage from './mcan-back.jpg'

function App() {
  return (
    <div className="App container-fluid">
      <Navigation />
      <Header />
      <News />
      <Aboutus />
      <Dawaah />
      <Executives />
      <Contact />
      <Footer /> 
    </div>
    
  );
}

export default App;
