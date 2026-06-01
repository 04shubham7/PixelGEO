import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import Analytics from './components/Analytics/Analytics';
import Pricing from './components/Pricing/Pricing';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './layouts/Footer/Footer';
import Discover from './pages/Discover';
import Featured from './pages/Featured';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Layout() {
  return (
    <div className="app flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Pages with Header & Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <Features />
              <Analytics />
              <Pricing />
              <ContactForm />
            </>
          } />
          <Route path="/discover" element={<Discover />} />
          <Route path="/featured" element={<Featured />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
