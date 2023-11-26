import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/MyProjects/Projects";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index path="RupeshPF" element={<Home />} />
          <Route path="/RupeshPF/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
