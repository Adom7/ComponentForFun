import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import CardPage from "./pages/CardPage/CardPage";
import NoPage from "./pages/NoPage/NoPage";



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<CardPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;