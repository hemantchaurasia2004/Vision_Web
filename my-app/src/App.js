import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Mainpage from './pages/mainpage';

function App() {
  
  return (
    <div className='bg-col height2'>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
