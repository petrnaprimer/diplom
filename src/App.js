import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import PurchaseSpan from "./components/PurchaseSpan";
import Template from "./components/Template";
import Agency from "./components/Agency";
import First from "./components/First";
import Img from "./components/Img";
import Section from "./components/Section";


function App() {
  return (
      <React.Fragment>

            <First/>
            <About/>
          <section className='dark trans text-center'>
              <Img/>
              <div className='centered medium'>
                  <Agency/>
                  <Template/>
                  <a className='icon' href='#'>

                      <PurchaseSpan/>

                      <div className='glyphicon glyphicon-shopping-cart'></div>
                  </a>
              </div>
          </section>

         <Menu/>
         <Footer/>

      </React.Fragment>

  );
}

export default App;
