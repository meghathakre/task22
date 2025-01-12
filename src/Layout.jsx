import { Link, Outlet  } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Layout=()=>{
    return(
        <>
        <Navbar className='color' data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                <Nav className="mre-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link as={Link} to="insert">Insert</Nav.Link>
        <Nav.Link as={Link} to="display">Display</Nav.Link>
        <Nav.Link as={Link} to="search">serach</Nav.Link>
        <Nav.Link as={Link} to="update">Update</Nav.Link>
        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
    
      </Nav>
        </Container>

        </Navbar>

<div id="wrapper">
<Outlet/>
</div>
{/* <hr size="4" color="blue"/> */}
       </>
    )
}
export default Layout;