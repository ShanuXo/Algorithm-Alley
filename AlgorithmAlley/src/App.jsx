import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/SignIn/Login";
import RegisterPage from "./components/Signup/Register";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  </Router>
  )
}

export default App
