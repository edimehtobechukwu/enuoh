import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { MotionIndex } from "./pages/MotionIndex";
import { Store } from "./pages/Store";

// Scroll to top wrapper
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <main className="w-full min-h-screen bg-[#f5f5f0] text-black selection:bg-[#ff4d00] selection:text-white">
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');
              
              .font-oswald {
                font-family: 'Oswald', sans-serif;
              }
              .font-consolas {
                font-family: 'Inconsolata', monospace;
              }
            `}
          </style>
          
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/motion-index" element={<MotionIndex />} />
            <Route path="/store" element={<Store />} />
          </Routes>
          
          <Footer />
        </main>
      </ScrollToTop>
    </Router>
  );
}
