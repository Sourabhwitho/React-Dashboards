import React, {useState} from 'react';

const PlacementControl = () => {
  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }

  return (
  //   <div className="placement-controls">
  //   <div className="placement-header">Placements</div>
  //   <table>
  //       <thead>
  //         <tr>
  //           <th>Enabled</th>
  //           <th>ID</th>
  //           <th>Part</th>
  //           <th>Side</th>
  //           <th>X</th>
  //           <th>Y</th>
  //           <th>Z</th>
  //           <th>Rot.</th>
  //           <th>Type</th>
  //           <th>Error Handling</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((row, index) => (
  //           <tr key={index}>
  //             <td><input type="checkbox" defaultChecked={row.enabled === "true"} /></td>
  //             <td>{row.id}</td>
  //             <td>{row.part}</td>
  //             <td>{row.side}</td>
  //             <td>{row.x}</td>
  //             <td>{row.y}</td>
  //             <td>{row.z}</td>
  //             <td>{row.rot}</td>
  //             <td>{row.type}</td>
  //             <td>{row.errorHandling}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   {/* <div className="tabs">
  //     <div className="tab" onClick={()=>dosomething(0)}>Enabled</div>
  //     <div className="tab" onClick={()=>dosomething(1)}>ID</div>
  //     <div className="tab" onClick={()=>dosomething(2)}>Part</div>
  //     <div className="tab" onClick={()=>dosomething(3)}>Side</div>
  //     <div className="tab" onClick={()=>dosomething(4)}>X</div>
  //     <div className="tab" onClick={()=>dosomething(5)}>Y</div>
  //     <div className="tab" onClick={()=>dosomething(6)}>Z</div>
  //     <div className="tab" onClick={()=>dosomething(7)}>Rot.</div>
  //     <div className="tab" onClick={()=>dosomething(8)}>Type</div>
  //     <div className="tab" onClick={()=>dosomething(9)}>Placed</div>
  //     <div className="tab" onClick={()=>dosomething(10)}>Status</div>
  //     <div className="tab" onClick={()=>dosomething(11)}>Error Handling</div>
  //     <div className="tab" onClick={()=>dosomething(12)}>Comments</div>
  //   </div> */}

  //   {/* <div className={`placement-controls ${activejob===0 ? '': 'hide'}`}>
  //     Boards
  //   </div>
  //   <div className={`placement-controls ${activejob===1 ? '': 'hide'}`}>
  //     Length
  //   </div>
  //   <div className={`placement-controls ${activejob===2 ? '': 'hide'}`}>
  //     Width
  //   </div>
  //   <div className={`placement-controls ${activejob===3 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===4 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===5 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===6 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===7 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===8 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===9 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===10 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===11 ? '': 'hide'}`}>
  //     Side
  //   </div>
  //   <div className={`placement-controls ${activejob===12 ? '': 'hide'}`}>
  //     Side
  //   </div> */}
  // </div>
  <></>
  );
};

export default PlacementControl;