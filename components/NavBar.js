import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
function NavBar() {
  const [color, setColor] = React.useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={color ? "color-nav-scroll" : "color-nav navbar-top"}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-text">
          <img  className="brand-img" src="../assets/terminal.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="testf">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">
              About me
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link">
              Projects
            </Nav.Link>
          </Nav>

          <Nav className="ps-4 nav-cont-icon">
            <Nav.Link
              href="https://www.linkedin.com/in/christian-soto-3a0a24240/"
              className="nav-link"
            >
              <LinkedInIcon className="nav-icon" fontSize="large" />
            </Nav.Link>
            <Nav.Link
              href="https://t.me/Christian_Soto_Martinez"
              className="nav-link"
            >
              <TelegramIcon className="nav-icon" fontSize="large" />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/Syas23150893/with_replies"
              className="nav-link"
            >
              <TwitterIcon className="nav-icon" fontSize="large" />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/ChrisSotoMtz"
              className="nav-link"
            >
              <GitHubIcon className="nav-icon" fontSize="large" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
