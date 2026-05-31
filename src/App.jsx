import React from 'react';
import Header from './layouts/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
