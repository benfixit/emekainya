import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
