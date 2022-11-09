import './App.css';
import Header from './Header';
import About from './About';
import Main from './Main';
import UserId from './UserId';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/:userName" element={<UserId/>} />
        </Routes>

      </Router>
     
    </>
  );
}

export default App;