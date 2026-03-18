import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import PrayWithAdetoun from "./pages/PrayWithAdetoun";
import SinglesAndMiracles from "./pages/SinglesAndMiracles";
import Podcast from "./pages/Podcast";
import Books from "./pages/Books";
import Media from "./pages/Media";
import Speaking from "./pages/Speaking";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/pray-with-adetoun" element={<PrayWithAdetoun />} />
          <Route
            path="/singles-and-miracles"
            element={<SinglesAndMiracles />}
          />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/books" element={<Books />} />
          <Route path="/media" element={<Media />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
