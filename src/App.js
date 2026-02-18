import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Test from './pages/test';
import Result from './pages/result';
import './App.css';
import GlobalStyle from './styles/globalstyle.jsx';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
