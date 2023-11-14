import GlobalStyle from "./reused/GlobalStyles";
import LandingPage from "./routes/LandingPage/LandingPage";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

