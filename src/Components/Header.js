import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import MyModal from "./MyModal";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tabFocus, setTabFocus] = useState("");

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
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Navbar.Brand className="w-25" href="#home">
              <img
                src="./assets/img/logoExtended.png"
                alt="logo optionsfy"
                className="w-100 mx-auto d-none d-md-flex"
              ></img>
            </Navbar.Brand>
            <Nav.Link
              onClick={() => {
                setTabFocus("login");
                setModalShow(true);
              }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTabFocus("signup");
                setModalShow(true);
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <MyModal
        renderKey={tabFocus}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Navbar>
  );
};
export default Header;
