import { Link } from "react-router-dom";
import logo from '../../data/Logo/bitmap.png'
import { Button } from "@mui/material";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { useContext } from "react";
import { mycontext } from "../../App";


const Header = ()=> {
    const context=useContext(mycontext);
    return (
        <>
        <header className="d-flex align-items-center">
            <div className="row d-flex align items-center">
                {}
                <div className="col-sm-4 part1">
                    <Link to ={'/'}  className="d-flex align-items-center logo">
                        <img src={logo} width= {200} height={75}/>
                    </Link>
                </div>
            </div>

            <div className="col-sm-4 d-flex align-items-center part 2">
                <Button onClick={()=>context.setistogglesidebar(!context.istogglesidebar)}>
                    {
                        context.istogglesidebar===false ? <MdMenuOpen/> : <MdOutlineMenu/>
                    }
                    </Button>
            </div>
            </header>
        </>
    )
}
export default Header;