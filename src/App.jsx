import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Ctc from "./components/Ctc";
import Welcome from "./components/Welcome";
import Ticks from "./components/Ticks";
import Swaknee from "./components/Swaknee";
import Steps from "./components/Steps";
import Marqee from "./layouts/Marqee";
import Contact from "./models/Contact";
import Testimonials from "./layouts/Testimonials";
import Faq from "./layouts/Faq";
import Science from './components/Science';
import Whatsapp from './layouts/Whatsapp';
import Services2 from './components/Services2';


const App = () => {
  return (
    <div>
      
      <Navbar />
      <Ctc/>
      <Home />
      <Welcome />
      <Ticks/>
      <Swaknee/>
      <Science/>
      <Services2/>
      <Steps/>
      <Faq/>
      <Marqee/>
      <Testimonials/>
      <Contact/>
      <Footer />
      <Whatsapp/>
     

    </div>
  );
};

export default App;
