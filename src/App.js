import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from './Pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/score" element={<P.Score />} />
        <Route path="/quiz" element={<P.QuizSelect />} />
        <Route path="/select" element={<P.Select />} />
        <Route path="/picture" element={<P.PicturePage />} />
        <Route path="/quiz/:levelId/:quizId" element={<P.Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
