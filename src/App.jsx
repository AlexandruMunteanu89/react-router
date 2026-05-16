import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLeyout";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/prodotti" element={<Prodotti />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
