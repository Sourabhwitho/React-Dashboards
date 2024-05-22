
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='main d-flex'>
      <div className='sidebarWrapper'>
        <Sidebar/>
      </div>
      <div className='content'>
        <Routes>
            <Route path ="/" exact={true} element = {<Dashboard/>}/>
            <Route path ="/dashboard" exact={true} element ={<Dashboard/>}/>
        </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
