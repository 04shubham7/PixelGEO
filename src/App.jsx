import React from 'react';
import Header from './layouts/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
