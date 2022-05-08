import './App.css';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  /* const location = useLocation(); */
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter >
        <BrowserRouter >
          <Routes >
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>

    </div>
  );
}

export default App;
