import React, { Suspense, lazy } from 'react'; // Corrected the import statement

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const About = lazy(() => import('./About'));
const Navbar = lazy(() => import('./Navbar'));
const Profile = lazy(() => import('./Profile'));
const Modal = lazy(() => Modal('./Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}> {/* Corrected "Suspence" to "Suspense" */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
