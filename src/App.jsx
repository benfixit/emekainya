import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="resume" element={<Resume />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
