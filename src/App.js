// Global styles
import GlobalStyles from "./components/GlobalStyles";

// import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

// Router
import { Routes , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <GlobalStyles/>
      <Nav/>
      
 <Routes>
 <Route path="/"  element = {<AboutUs/>}  />
 
 <Route path="/work" element = {<OurWork/>} /  >
    
 <Route path="/contact" element = {<ContactUs/>} /  >
 
 
 </Routes>
      


    </div>
  );
}

export default App;
