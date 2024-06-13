import React from 'react';
import Camera from '../camera';
import MachineControls from '../MachineControls';
import Footer from '../Footer';
import Tabs from '../Tabs';

const App = () => {
  return (
    <div className="App">
      <div className="content1">
        <div className="left-panel">
          <Camera/>
          <MachineControls/>
        </div>
        <div className="right-panel">
          <main className='main-content'>
          <Tabs/>
          </main>
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;


