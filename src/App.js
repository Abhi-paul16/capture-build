// Global styles
import GlobalStyles from "./components/GlobalStyles";

// import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Routes , Route ,useLocation } from "react-router-dom";

//animate
import { AnimatePresence } from "framer-motion";


function App() {
 const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      
      <GlobalStyles/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
 <Routes location = {location}   key = {location.pathname} >
 <Route  path="/"  element = {<AboutUs/>} />
 
 <Route path="/work" element = {<OurWork/>} /  >
 <Route path="/work/:id" element = {<MovieDetail/>} /  >
    
 <Route path="/contact" element = {<ContactUs/>} /  >
 
 
 </Routes>
 </AnimatePresence>


    </div>
  );
}

export default App;
