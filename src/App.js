import Sidebar from './Components/Sidebar';
import Home from './Pages/Home'
import Deals from './Pages/Deals';
import NewDealForm from './Pages/NewDealForm';
import Form from './Pages/Form';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Deals' element={<Deals/>}/>
      <Route exact path='/New-investment' element={<NewDealForm/>}/>
      <Route eaxct path='/user-form' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
