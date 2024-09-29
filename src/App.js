import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Works from './Pages/Works/Works';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import ReadBlog from './Pages/ReadBlog/ReadBlog';
import Careers from './Pages/Careers/Careers';
import PrivacyPolicy from './Pages/Privacy-Policy/PrivacyPolicy.jsx';
import TermsOfUse from './Pages/Terms-Of-Use/TermsOfUse.jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Ecom from './Pages/Industries/eCommerce/Ecom.jsx';
import Ngo from './Pages/Industries/Ngo/Ngo.jsx';
import IT from './Pages/Industries/IT/IT.jsx';
import Egov from './Pages/Industries/eGovernance/Egov.jsx';
import Media from './Pages/Industries/Media/Media.jsx';
import RealState from './Pages/Industries/Real-Estate/RealState.jsx';
import AppDevelopment from './Pages/Services/AppDevelopment/AppDev';
import WebDevelopment from './Pages/Services/WebDevelopment/WebDev';
import BrandIdentity from './Pages/Services/BrandIdentity/BrandIdentity.jsx';
import SMM from './Pages/Services/SocialMedia/SocialMedia.jsx';
import SEO from './Pages/Services/SEO/SEO.jsx';
import MarketResearch from './Pages/Services/MarketResearch/MarketResearch.jsx';
import ITConsulting from './Pages/Services/IT-Consulting/ITConsulting.jsx';
import UXUI from './Pages/Services/UXUI/UXUI';
import './App.css';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
// import Slider1 from "./components/Slider1/Slider1.jsx";

function App()
{
  return(
    <>
    <BrowserRouter>
      <Navbar />
      {/* <Slider1/> */}
    <div id='scroll'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/industries' element={<Industries/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/works' element={<Works/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/readBlog' element={<ReadBlog/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/Privacy-Policy' element={<PrivacyPolicy/>}></Route>
      <Route path='/terms-Of-Use' element={<TermsOfUse/>}></Route>
      <Route path='/Industries/Real-Estate' element={<RealState/>}></Route>
      <Route path='/Industries/IT' element={<IT/>}></Route>
      <Route path='/Industries/Media' element={<Media/>}></Route>
      <Route path='/Industries/Ngo' element={<Ngo/>}></Route>
      <Route path='/Industries/Ecommerce' element={<Ecom/>}></Route>
      <Route path='/Industries/Egovernance' element={<Egov/>}></Route>
      <Route path='/Services/AppDevelopment' element={<AppDevelopment/>}></Route>
      <Route path='/Services/WebDevelopment' element={<WebDevelopment/>}></Route>
      <Route path='/Services/UXUI' element={<UXUI/>}></Route>
      <Route path='/Services/SEO' element={<SEO/>}></Route>
      <Route path='/Services/SocialMedia' element={<SMM/>}></Route>
      <Route path='/Services/MarketResearch' element={<MarketResearch/>}></Route>
      <Route path='/Services/BrandIdentity' element={<BrandIdentity/>}></Route>
      <Route path='/Services/IT-Consulting' element={<ITConsulting/>}></Route>
    </Routes>
      <Footer/>
    </div>
    {/* </ContentWrapper> */}
      </BrowserRouter>
    </>
  );
}
export default App;