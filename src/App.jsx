import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import UserReportForm from './components/UserReportForm';
import UserTrack from './components/UserTrack';
import FillForm from '../src/components/FillForm/Index.jsx';
import PhoneCall from '../src/components/PhoneCall';
import Email from '../src/components/Email';
import Location from '../src/components/Location/Index.jsx';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/UserReportForm" element={<UserReportForm/>} />
            <Route path="/UserTrack" element={<UserTrack/>} />
            <Route path="/FillForm" element={<FillForm/>} />
            <Route path="/PhoneCall" element={<PhoneCall/>}/>
            <Route path="/Email" element={<Email/>} />
            <Route path="/Location" element={<Location/>} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;

