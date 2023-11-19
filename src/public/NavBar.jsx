import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';// Import the logout icon
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


const NavBar = () => {
    const navigate = useNavigate();
    /*const user = auth.currentUser;*/

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }
  return (
    <>
      <Navbar collapseOnSelect="lg"  className="bg-body-tertiary full-width-navbar" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>HOIST CONTROL</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <Nav className="ml-auto"> {/* Use ml-auto for right alignment */}
          <Nav.Link href="#logout" onClick={(e) => logoutUser(e)}><FontAwesomeIcon icon={faSignOutAlt} /> Logout </Nav.Link>  
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar