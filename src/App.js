import "./App.css";
import Login from "./Components/Login";
import Main from "./Pages/Main";
import RedirectHandler from "./Components/RedirectHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/kakao/callback" element={<RedirectHandler />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
