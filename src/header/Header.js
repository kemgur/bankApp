import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const Header = () => {
  return (
    <div>
    <Container fluid>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
      Disabled
       </Nav.Link>
      </Nav.Item>
     </Nav>
        
       

    </Container>
    </div>
  )
}
export default Header
