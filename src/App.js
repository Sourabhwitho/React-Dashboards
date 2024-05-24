
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './component/Dashboard';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './pages/NewJob/Main'
import { createContext, useState } from 'react';

const mycontext = createContext();

function App() {
  const [istogglesidebar, setistogglesidebar]=useState(false); 
  const values={
    istogglesidebar,
    setistogglesidebar
  }
  return (
    <BrowserRouter>
    <mycontext.Provider value={values}>
    <Header/>
    <Routes><Route path ="/new-job" exact={true} element ={<Main/>}/></Routes>
    <div className='main d-flex'>
      <div className={`sidebarWrapper ${istogglesidebar ? 'toggle': ''}`}>
        <Sidebar/>
      </div>
      <div className={`content ${istogglesidebar ? 'toggle': ''}`}>
        <Routes>
            <Route path ="/" exact={true} element = {<Dashboard/>}/>
            <Route path ="/dashboard" exact={true} element ={<Dashboard/>}/>
        </Routes>
    </div>
    </div>
    </mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {mycontext};
