import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import { Header } from "./components";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<P.Main />} />
          <Route path="/score" element={<P.Score />} />
          <Route path="/quiz" element={<P.QuizSelect />} />
          <Route path="/select" element={<P.Select />} />
          <Route path="/picture" element={<P.PicturePage />} />
          <Route path="/quiz/:levelId/:quizId" element={<P.Quiz />} />
          <Route path="/human/:humanNum" element={<P.HumanQuiz />} />
          <Route path="/balance/:id" element={<P.Balance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
