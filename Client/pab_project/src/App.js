import {Routes,Route,BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Signupform from './components/Signupform';
import Homenav from './components/Homenav';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
     <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Signupform" element={<Signupform/>}/>
      <Route path="/Homenav" element={<Homenav/>}/>
     </Routes>
     </BrowserRouter>
    <Footer/>
    </div>
  );
}
export default App;