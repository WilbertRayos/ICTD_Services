import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import ServiceRequest from "./ServiceRequest";
import WebsiteUpload from "./WebsiteUpload";
import About from "./About";
import Contacts from "./Contacts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ServiceRequest />
      <WebsiteUpload />
      <About />
      <Contacts />
    </BrowserRouter>
  );
}

export default App;
