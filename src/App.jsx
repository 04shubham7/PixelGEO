import React from 'react';
import Header from './layouts/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './layouts/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
