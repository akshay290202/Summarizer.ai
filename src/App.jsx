import React from 'react'
import Hero from './components/hero.jsx'
import Demo from './components/Demo.jsx'
import Footer from './components/Footer.jsx';

import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Demo/>
        <Footer/>
      </div>
    </main>
  )
}

export default App