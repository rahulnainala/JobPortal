import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="flex justify-center py-2">
        <span>
          Designed by{" "}
          <a href="https://rahulnainala.com/" className="text-red-600">
            {" "}
            Rahul Nainala
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
