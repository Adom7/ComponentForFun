import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import NoPage from "./pages/NoPage/NoPage";
import HomePage from "./pages/HomePage/HomePage";

import "./components/animationTimeline.css"



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;