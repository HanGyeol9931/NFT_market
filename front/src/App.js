import "./App.css";
import Login from "./page/Login";
import Main from "page/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* path="/Login" 변경전 */}
        {/* 테스트스테스테스테스테스ㅡ */}
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
