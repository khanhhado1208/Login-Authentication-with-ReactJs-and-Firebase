import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
          <Navbar.Brand href="#home">KONECRANES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Notification</Nav.Link>
            <Nav.Link href="#pricing" onClick = {(e) => logoutUser(e)}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default NavBar