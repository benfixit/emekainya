import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CatholicHymnbook from "./pages/privacy-policy/CatholicHymnbook";
import Rates from "./pages/Rates";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="rates" element={<Rates />}></Route>
            <Route path="privacy-policy/catholic-hymnbook" element={<CatholicHymnbook />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
