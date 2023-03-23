import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teachers from './components/Teachers';
import Addstud from './components/Addstud';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <Addstud></Addstud>  */}
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path='/addstud' 
         element={<Addstud data={{id:'',name:'',grade:''}} method="post"/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
