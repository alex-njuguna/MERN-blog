import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Dashboard, Projects, SignIn, SignUp } from "./pages";
import { NavBar, NotFound, Footer } from "./components";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="dashboard/" element={<Dashboard />} />
          <Route path="projects/" element={<Projects />} />
          <Route path="sign-in/" element={<SignIn />} />
          <Route path="sign-up/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
