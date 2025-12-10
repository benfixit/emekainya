import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
