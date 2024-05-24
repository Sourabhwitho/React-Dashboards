import { Button } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaRuler } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { mycontext } from "../../App";

var map1 = new Map([[1,false],[2,false],[3,false],[4,false],[5,false],[0,false]]);
var map = new Map([[1,false],[2,false],[3,false],[4,false],[5,false],[0,false]]);

function updateMap(originalMap, keyToUpdate, newValue) {
    // Create a new Map by copying the original and updating the key-value pair
    const updatedMap = new Map(originalMap);
    updatedMap.set(keyToUpdate, newValue);
  
    // Return the updated Map
    return updatedMap;
  }

const Sidebar = ()=> {

    const context= useContext(mycontext);

    var [activetab, setactivetab]=useState(0);
    var [toggle, setistoggle]=useState(false);
    var [activesubtab, setactivesubtab]=useState(0);
    var [map2, setmap2]=useState(map);

    const isopensubsubmenu=(index)=>{
        setactivesubtab(index);
        setistoggle(!toggle);
    }

    const isopensubmenu=(index)=>{
        setactivetab(index);
        console.log(activetab);
        map1=updateMap(map,index,!map1.get(index));
        setmap2(map1);
        console.log(map1);

    }
    return (
        <>
            <div className="sidebar">
            <ul>
            <li><Button className={`w-100 ${activetab===0 ? 'active' : ''}`}onClick={()=>isopensubmenu(0)}>
                    Dashboard
                    </Button>
                    </li>
                <li><Button  className={`w-100 ${activetab===1 ? 'active' : ''}`}onClick={()=>isopensubmenu(1)}>
                    <span className="icon"><FaFileAlt/></span>
                    File
                    <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                        <ul className={`submenuwrapper${map2.get(1) ? 'colapse':'colapsed'}`}>
                        <li><Link to='/new-job' onClick={()=>context.setistogglesidebar(!context.istogglesidebar)}>New Job</Link></li>
                        <li><Link to=''>Open Job</Link></li>
                        <li><Link to=''>Open Recent Job</Link></li>
                        <li><Link to=''>Save Job</Link></li>
                        <li><Link to=''>Save Job as</Link></li>
                        <li><Link to=''>Save Configuration</Link></li>
                        <li>
                        <Button  className={`w-100 ${activetab===1 ? 'active' : ''}`} onClick={()=>isopensubsubmenu(1)}>
                        Import Board
                        </Button>
                        <ul className={`subsubmenuwrapper${activesubtab===1 && toggle ? 'colapse':'colapsed'}`}>
                        <li><Link to=''>Labcenter Proteus.pkb</Link></li>
                        <li><Link to=''>cadSoft EagleBoard</Link></li>
                        <li><Link to=''>Eaglemountsmd.ump</Link></li>
                        <li><Link to=''>Kicad.pos</Link></li>
                        <li><Link to=''>Diptrace.csv</Link></li>
                        <li><Link to=''>Named CSV</Link></li>
                        </ul>
                        </li>
                        <li><Link to=''>Exit</Link></li>
                    </ul>
                    </li>
                    <li><Button  className = {`w-100 ${activetab===2 ? 'active' : ''}`} onClick={()=>isopensubmenu(2)} >
                    <span className="icon"><FaPlay/></span>
                    Job
                    <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </li>
                    <li><Button className={`w-100 ${activetab===3 ? 'active' : ''}`}onClick={()=>isopensubmenu(3)}>
                    <span className="icon"><FaRuler/></span>
                    Machine
                    <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </li><li><Button className={`w-100 ${activetab===4 ? 'active' : ''}`}onClick={()=>isopensubmenu(4)}>
                    <span className="icon"><FaRegWindowRestore/></span>
                    Window
                    <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </li><li><Button className={`w-100 ${activetab===5 ? 'active' : ''}`}onClick={()=>isopensubmenu(5)}>
                    <span className="icon"><IoIosHelpCircle/></span>
                    Help
                    <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </li>
            </ul>
            </div>
        </>
    )
}
export default Sidebar;