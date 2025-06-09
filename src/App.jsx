import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeeklySpecials from './pages/WeeklySpecials';
import Inventory from './pages/Inventory';
import SpecialOffers from './pages/SpecialOffers';
import Financing from './pages/Financing';
import ServiceParts from './pages/ServiceParts';
import DealerDirectory from './pages/DealerDirectory';
import DealerProfile from './pages/DealerProfile';
import AutoBusinesses from './pages/AutoBusinesses';
import Community from './pages/Community';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weekly-specials" element={<WeeklySpecials />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/service-parts" element={<ServiceParts />} />
            <Route path="/dealer-directory" element={<DealerDirectory />} />
            <Route path="/dealer/:id" element={<DealerProfile />} />
            <Route path="/auto-businesses" element={<AutoBusinesses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;