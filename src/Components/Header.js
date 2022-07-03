import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import logo from "../assets/logo.png";
import logoMobile from "../assets/logoMobile.png";
import burgerIcon from "../assets/burgerIcon.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header = ({ user, login }) => {
	const [modalShow, setModalShow] = useState(false);
	const [tabFocus, setTabFocus] = useState("");
	const onHide = () => setModalShow(false);

	const navigate = useNavigate();

	const { t } = useTranslation();

	return (
		<Navbar className="heroGradient" expand="md">
			<Container className="justify-content-space-between">
				<Navbar.Brand
					className="w-25 d-inline d-md-none"
					onClick={() => navigate("/")}
				>
					<img src={logoMobile} alt="logo optionsfy" className="w-50" />
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
						<HashLink
							className="text-white text-decoration-none"
							to="/home#pricing"
						>
							{t("header.navbar.pricing")}
						</HashLink>
						<HashLink
							className="text-white text-decoration-none"
							to="/home#features"
						>
							{t("header.navbar.features")}
						</HashLink>
						<Navbar.Brand className="w-25 py-0" onClick={() => navigate("/")}>
							<img
								src={logo}
								className="w-100 mx-0 d-none d-md-flex"
								alt="Optionsfy Logo"
							/>
						</Navbar.Brand>
						{!user ? (
							<Nav.Link
								className="text-white"
								onClick={() => {
									setTabFocus("login");
									setModalShow(true);
								}}
							>
								{t("header.navbar.login")}
							</Nav.Link>
						) : (
							<Nav.Link
								className="text-white"
								onClick={() => navigate("dashboard")}
							>
								{t("header.navbar.dashboard")}
							</Nav.Link>
						)}
						{!user ? (
							<Nav.Link
								className="text-white"
								onClick={() => {
									setTabFocus("signup");
									setModalShow(true);
								}}
							>
								{t("header.navbar.signUp")}
							</Nav.Link>
						) : (
							<Nav.Link
								className="text-white"
								onClick={() => {
									login(false);
									localStorage.removeItem("user");
								}}
							>
								{t("header.navbar.logout")}
							</Nav.Link>
						)}
					</Nav>
					<LanguageSelector />
				</Navbar.Collapse>
			</Container>
			<ModalComponent
				renderKey={tabFocus}
				show={modalShow}
				onHide={onHide}
				login={login}
			/>
		</Navbar>
	);
};
export default Header;
