import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container className="justify-content-space-between">
        <Navbar.Brand className="w-25 d-inline d-md-none" href="#home">
          <img
            src="./assets/img/logoExtended.png"
            alt="logo optionsfy"
            className="w-100"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle
          className="justify-content-end"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-end align-items-md-center">
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Navbar.Brand className="w-25" href="#home">
              <img
                src="./assets/img/logoExtended.png"
                alt="logo optionsfy"
                className="w-100 mx-auto d-none d-md-flex"
              ></img>
            </Navbar.Brand>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
