import React from 'react'
import Header from './Header';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Dawaah from './Dawaah';
import News from './News';
import Executives from './Executives';


function Home() {
  return (
    <div>
        <Header />
        <News />
        <Aboutus />
        <Dawaah />
        <Executives />
        <Contact />
    </div>
  )
}

export default Home