import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FC } from "react";
import "../assets/css/sidebar.css";

const NavScroll: FC = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="text-container">
          <h1>MOVIE</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScroll;
