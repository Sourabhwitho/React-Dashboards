import React, { useState } from 'react';

const MachineControls = () => {
  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }
  return (
    <div className="machine-control">
    <div className="controls">
      <div className="machine-controls">
        <h2>Machine Controls</h2>
        <button>-</button>
        <select>
          <option>Nozzle: N1-NT1 (Head: H1)</option>
          <option>Camera: Top (Head: H1)</option>
          <option>Actuator: Light Top(Head: H1)</option>
          <option>Actuator: Pump (Head: H1)</option>
          <option>Actuator: A1 (Head: H1)</option>
        </select>
        <div className="control-section">
          <div className="tabs">
            <div className="tab" onClick={()=>dosomething(0)}>Jog</div>
            <div className="tab" onClick={()=>dosomething(1)}>Special</div>
            <div className="tab" onClick={()=>dosomething(2)}>Actuators</div>
            <div className="tab" onClick={()=>dosomething(3)}>Safety</div>
          </div>

          <div className={`jog-controls ${activejob===0 ? '': 'hide'}`}>
          <button>φ</button>
          <button>🏠</button>
            <div className="xy-controls">
              <h3>X/Y</h3>
              <button>↑</button>
              <div className="xy-middle">
                <button>←</button>
                <button>P</button>
                <button>→</button>
              </div>
              <button>↓</button>
            </div>
            <div className="z-controls">
              <h3>Z</h3>
              <button>↑</button>
              <button>P</button>
              <button>↓</button>
            </div>
            <div className="speed-distance">
              <label>Speed [%]</label>
              <input type="range" min="0" max="100" defaultValue="100" />
              <label>Distance [mm/deg]</label>
              <input type="number" defaultValue="1.0" />
            </div>
            <div>
              <h3>C</h3>
              <button>↺</button>
              <button>P</button>
              <button>↻</button>
            </div>
          </div>
          <div className={`jog-controls ${activejob===1 ? '': 'hide'}`}>
            Special
          </div>
          <div className={`jog-controls ${activejob===2 ? '': 'hide'}`}>
            Actuators
          </div>
          <div className={`jog-controls ${activejob===3 ? '': 'hide'}`}>
            Safety
          </div>
        </div>
      </div>
    </div>



  
</div>
  );
};

export default MachineControls;
