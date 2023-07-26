import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/score" element={<P.Score />} />
        <Route path="/select" element={<P.Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
