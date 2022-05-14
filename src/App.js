import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {  

  useEffect(()=> {
    AOS.init({
      duration: 1500
    });
  },[])

  return (
    <div>     
      <Navbar>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route> */}
        {
          publicRoutes.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))
        }

      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
