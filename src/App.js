import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Main from "./components/Main/Main";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import { useState } from "react";
function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main token={token}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn setToken={setToken}/>} />
        <Route path="/home" element={<HomePage token={token}/>} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
