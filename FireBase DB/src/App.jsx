import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Component/AllRoutes";
import { UserProvider } from "./Component/AuthContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
