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
<<<<<<< HEAD
=======
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
>>>>>>> 0ae8bdbb71048c3d1b3a4846edf606e59b0a184d
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App()
{
  return(
    <>
<<<<<<< HEAD
     
    <BrowserRouter>
       <Navbar />
       {/* <Home/> */}
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/products' element={<Products/>}></Route>
      <Route exact path='/industries' element={<Industries/>}></Route>
      <Route exact path='/services' element={<Services/>}></Route>
      <Route exact path='/works' element={<Works/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contactUs' element={<ContactUs/>}></Route>
      <Route exact path='/getStarted' element={<GetStarted/>}></Route>
      <Route exact path='/readBlog' element={<ReadBlog/>}></Route>
      <Route exact path='/careers' element={<Careers/>}></Route>
      <Route exact path='/privacyPolicy' element={<PrivacyPolicy/>}></Route>
      <Route exactpath='/termsOfUse' element={<TermsOfUse/>}></Route>
    </Routes>
    <div id = 'footer'>
       <Footer/>
    </div>
=======
    <BrowserRouter>
    <ContentWrapper>
    <div id='fixed'>
      <Navbar />
    </div>
    <div id='scroll'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/industries' element={<Industries/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/works' element={<Works/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactUs' element={<ContactUs/>}></Route>
      <Route path='/getStarted' element={<GetStarted/>}></Route>
      <Route path='/readBlog' element={<ReadBlog/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/privacyPolicy' element={<PrivacyPolicy/>}></Route>
      <Route path='/termsOfUse' element={<TermsOfUse/>}></Route>
    </Routes>
    <div id='test' style={{height:'1000px',background:'blue'}}></div>
      <Footer/>
    </div>
    </ContentWrapper>
>>>>>>> 0ae8bdbb71048c3d1b3a4846edf606e59b0a184d
      </BrowserRouter>
    </>
  );
}
export default App;