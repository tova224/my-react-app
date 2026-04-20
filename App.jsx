import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Post name="Tova Oshinsky" content="This is my first post" />
      <Post name="John Doe" content="This is my second post" />
      <Post name="Jane Smith" />
    </>
  );
}

export default App;