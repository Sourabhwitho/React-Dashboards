import { Link } from "react-router-dom";
import logo from '../../data/bitmap.png'
import { Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";


const Header = ()=> {
    return (
        <>
        <header className="d-flex align-items-center">
            <div className="row d-flex align items-center">
                {}
                <div className="col-sm-4 part1">
                    <Link to ={'/'} className="d-flex align-items-center logo">
                        <img src={logo} width= {200} height={75}/>
                    </Link>
                </div>
            </div>

            <div className="col-sm-4 d-flex align-items-center part 2">
                <Button><MdMenuOpen/></Button>
            </div>
            </header>
        </>
    )
}
export default Header;