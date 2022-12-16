import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Result from './Components/Result/Result';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
      <Route exact path='/result' element={<Result/>}/>
        
      
    </Routes>
      
           
  
    
    <Footer/>
    </Router>
  );
}

export default App;
