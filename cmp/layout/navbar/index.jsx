import Style from "./navbar.module.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";

import data from "./menu.json";

import Link from "next/link";


const MenuDesign = (data)=>{
    const design =(
        <>       
            <Link href={data.menuInfo.url} passHref>               
                <button className={`btn btn-white rounded-0 ${Style.mynav} mx-4`}>
                    {data.menuInfo.label}
                </button>    
            </Link>       
        </>
    );
    return design;
}

const DropMenu = (data)=>{
    const design = (
        <>
        <NavDropdown className={`${Style.mynav} mx-4`} title={data.menuInfo.label} id="dropdown-container">
            {
                data.menuInfo.dropdownMenu.map((item)=>{
                    return <MenuDesign menuInfo={item} key={item.id} />;
                })
            }
        </NavDropdown>
        </>
    );
    return design;
}

const NavbarCont =()=>{
    const design = (
        <>
           <Navbar bg="white" expand="lg" className="shadow fixed-top py-3">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Prabhat Web Technologies
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" justify-content-end w-100">
                       {
                            data.map((item)=>{
                                if(item.dropdown){
                                  return <DropMenu menuInfo={item} key={item.id} />  
                                }
                                return <MenuDesign menuInfo={item} key={item.id} />;
                            })
                       } 

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar> 
        </>
    );
    return design;
}

export default NavbarCont;