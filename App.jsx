import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import PostList from "./components/PostList";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Posts />}>
          <Route index element={<PostList />} />
        </Route>

        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;