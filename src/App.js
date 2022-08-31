import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Compus from './pages/Compus';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/compus" element={<Compus />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
