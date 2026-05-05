import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

    <Routes>
  <Route path="/" element={<Posts />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;