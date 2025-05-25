import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import LayoutSign from "./components/layout-sign";
import SignIn from "./pages/sign-in";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<LayoutSign />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
