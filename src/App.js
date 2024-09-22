import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Works from './Pages/Works/Works';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import GetStarted from './Pages/GetStarted/GetStarted';
import ReadBlog from './Pages/ReadBlog/ReadBlog';
import Careers from './Pages/Careers/Careers';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Ecom from './Pages/IndustriesPages/Ecom/Ecom';
// import Ngo from './Pages/IndustriesPages/Ngo/Ngo';
import IT from './Pages/IndustriesPages/IT/IT';
import Egov from './Pages/IndustriesPages/Egov/Egov';
import Media from './Pages/IndustriesPages/Media/Media';
import RealState from './Pages/IndustriesPages/RealState/RealState';
import AppDevelopment from './Pages/ServicesPages/AppDevelopment/AppDev';
import WebDevelopment from './Pages/ServicesPages/WebDevelopment/WebDev';
import ITConsulting from './Pages/ServicesPages/ITConsulting/ITConsulting';
import UXUI from './Pages/ServicesPages/UXUI/UXUI';
import './App.css';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';

function App()
{
  return(
    <>
    <BrowserRouter>
    {/* <ContentWrapper> */}
    <div id='fixed'>
      <Navbar />
    </div>
    <div id='scroll'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/industries' element={<Industries/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/works' element={<Works/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/GetStarted' element={<GetStarted/>}></Route>
      <Route path='/readBlog' element={<ReadBlog/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
      <Route path='/termsOfUse' element={<TermsOfUse/>}></Route>
      <Route path='/IndustriesPages/RealState' element={<RealState/>}></Route>
      <Route path='/IndustriesPages/IT' element={<IT/>}></Route>
      <Route path='/IndustriesPages/Media' element={<Media/>}></Route>
      {/* <Route path='/IndustriesPages/Ngo' element={<Ngo/>}></Route> */}
      <Route path='/IndustriesPages/Ecom' element={<Ecom/>}></Route>
      <Route path='/IndustriesPages/Egov' element={<Egov/>}></Route>
      <Route path='/ServicesPages/AppDevelopment' element={<AppDevelopment/>}></Route>
      <Route path='/ServicesPages/WebDevelopment' element={<WebDevelopment/>}></Route>
      <Route path='/ServicesPages/UXUI' element={<UXUI/>}></Route>
      <Route path='/ServicesPages/ITConsulting' element={<ITConsulting/>}></Route>
    </Routes>
      <Footer/>
    </div>
    {/* </ContentWrapper> */}
      </BrowserRouter>
    </>
  );
}
export default App;