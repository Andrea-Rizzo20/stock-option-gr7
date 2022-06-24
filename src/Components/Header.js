import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyModal from "./MyModal";
import logo from "../assets/logoFooter.png";
import logoMobile from "../assets/logoMobile.png";
import burgerIcon from "../assets/burgerIcon.png";
import { Navigate, useNavigate } from "react-router-dom";

const Header = ({user,login}) => {
  const [modalShow, setModalShow] = useState(false);
  const [tabFocus, setTabFocus] = useState("");
  const [userData, setUserData] = useState(null)

  const onHide = () => setModalShow(false)

  const navigate = useNavigate()



  return (
    <Navbar className="heroGradient" expand="md">
      <Container className="justify-content-space-between">
        <Navbar.Brand className="w-25 d-inline d-md-none" onClick={()=> navigate('/')}>
          <img src={logoMobile} alt="logo optionsfy" className="w-50"/>
        </Navbar.Brand>
        <Navbar.Toggle
          className="justify-content-end border-0 burgerMenu "
          aria-controls="basic-navbar-nav"
        >
          <img src={burgerIcon} alt="burger menu"></img>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="d-flex gap-md-4 gap-0 justify-content-center align-items-end align-items-md-center">
            <Nav.Link className="text-white">Pricing</Nav.Link>
            <Nav.Link className="text-white">Features</Nav.Link>
            <Navbar.Brand className="w-25 py-0" onClick={() => navigate('/')}>
              <img
                src={logo}
                className="w-100 mx-0 d-none d-md-flex"
                alt="Optionsfy Logo"
              />
            </Navbar.Brand>
             {!user
             ?<Nav.Link
              className="text-white"
              onClick={() => {
                setTabFocus("login");
                setModalShow(true);
              }}
            >
              Login
            </Nav.Link>
            :<Nav.Link
            className="text-white"
            onClick={()=>navigate('dashboard')}
          >
            Dashboard
          </Nav.Link>}
            {!user
            ?<Nav.Link
              className="text-white"
              onClick={() => {
                setTabFocus("signup");
                setModalShow(true);
              }}
            >
              Sign Up
            </Nav.Link>
            :<Nav.Link
            className="text-white"
            onClick={() => {
              login(false);
              localStorage.removeItem('user');
            }}
          >
            Logout
          </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <MyModal
        renderKey={tabFocus}
        show={modalShow}
        onHide={onHide}
        login={login}
      />
    </Navbar>
  );
};
export default Header;
