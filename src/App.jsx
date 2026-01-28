import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Products" element={<Products />} />
        </Route>

      </Routes>
    </BrowserRouter >


  )
}

export default App
