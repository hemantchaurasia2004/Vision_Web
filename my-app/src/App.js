import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Mainpage from './pages/mainpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
