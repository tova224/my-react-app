import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import PostsLayout from "./components/PostsLayout";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import NewPost from "./components/NewPost";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/posts" element={<PostsLayout />}>
          <Route index element={<PostList />} />
          <Route path="new" element={<NewPost />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;