import React from 'react';
import Camera from '../camera';
import MachineControls from '../MachineControls';
import BoardList from '../BoardList';
import Footer from '../Footer';
import PlacementControl from '../Placementcontrols';
import Tabs from '../Tabs';

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="left-panel">
          <Camera/>
          <MachineControls/>
        </div>
        <div className="right-panel">
          <Tabs/>
          <BoardList/>
          <PlacementControl/>
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
