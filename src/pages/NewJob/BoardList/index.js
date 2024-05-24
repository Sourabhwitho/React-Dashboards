import React, { useState } from 'react';

const BoardList = () => {

  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }
  return (
    <div className="board-controls">
    <div className="controls-header">Boards</div>
    <div className="tabs">
    <div className="tab" onClick={()=>dosomething(0)}>Boards</div>
    <div className="tab" onClick={()=>dosomething(1)}>Length</div>
    <div className="tab" onClick={()=>dosomething(2)}>Width</div>
    <div className="tab" onClick={()=>dosomething(3)}>Side</div>
    <div className="tab" onClick={()=>dosomething(4)}>X</div>
    <div className="tab" onClick={()=>dosomething(5)}>Y</div>
    <div className="tab" onClick={()=>dosomething(6)}>Z</div>
    <div className="tab" onClick={()=>dosomething(7)}>Rot.</div>
    <div className="tab" onClick={()=>dosomething(8)}>Enabled?</div>
    <div className="tab" onClick={()=>dosomething(9)}>Check Fids?</div>
    </div>
    <div className={`board-controls ${activejob===0 ? '': 'hide'}`}>
      Boards
    </div>
    <div className={`board-controls ${activejob===1 ? '': 'hide'}`}>
      Length
    </div>
    <div className={`board-controls ${activejob===2 ? '': 'hide'}`}>
      Width
    </div>
    <div className={`board-controls ${activejob===3 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===4 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===5 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===6 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===7 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===8 ? '': 'hide'}`}>
      Side
    </div>
    <div className={`board-controls ${activejob===9 ? '': 'hide'}`}>
      Side
    </div>
  </div>
  );
};

export default BoardList;
