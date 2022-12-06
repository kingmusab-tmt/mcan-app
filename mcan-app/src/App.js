import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import OtherInfo from './OtherInfo';
// import BackgroundImage from './mcan-back.jpg'

function App() {
  return (
    <div className="App container-fluid">
      <Navigation />
      <Header />
      <OtherInfo />
      <Footer /> 
    </div>
    
  );
}

export default App;
