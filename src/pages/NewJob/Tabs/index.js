import React,{useState} from 'react';
import Machinesetup from './Machine-setup';
import BoardList from './BoardList';
import PlacementControl from './Placementcontrols';

const Tabs = () => {
  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }
  return (
    <div className='better-classes'>
    <div className="tabs">
    <div className="tab" onClick={()=>dosomething(0)}>Job</div>
    <div className="tab" onClick={()=>dosomething(1)}>Parts</div>
    <div className="tab" onClick={()=>dosomething(2)}>Packages</div>
    <div className="tab" onClick={()=>dosomething(3)}>Vision</div>
    <div className="tab" onClick={()=>dosomething(4)}>Feeders</div>
    <div className="tab" onClick={()=>dosomething(5)}>Machine Setup</div>
    <div className="tab" onClick={()=>dosomething(6)}>Issues & Solutions</div>
    <div className="tab" onClick={()=>dosomething(7)}>Log</div>
  </div>
    <div className={`better-classes ${activejob===0 ? '': 'hide'}`}>
    <BoardList/>
  </div>
  <div className={`better-classes ${activejob===1 ? '': 'hide'}`}>
    Parts
  </div>
  <div className={`better-classes ${activejob===2 ? '': 'hide'}`}>
    Packages
  </div>
  <div className={`better-classes ${activejob===3 ? '': 'hide'}`}>
    Vision
  </div>
  <div className={`better-classes ${activejob===4 ? '': 'hide'}`}>
    Feeders
  </div>
  <div className={`better-classes ${activejob===5 ? '': 'hide'}`}>
    <Machinesetup/>
  </div>
  <div className={`better-classes ${activejob===6 ? '': 'hide'}`}>
    Issues
  </div>
  <div className={`better-classes ${activejob===7 ? '': 'hide'}`}>
    Logs
  </div>
  </div>
  );
};

export default Tabs;