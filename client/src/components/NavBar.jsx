import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar
      expand="lg"
      className="fixed-top text-light"
      style={{ background: "#3f51b5" }}
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            <span className="bg-danger text-light px-2 py-1 fw-bold rounded shadow">
              Alex
            </span>
            Blog
          </Link>
        </Navbar.Brand>
        <form>
          <div className="bg-light rounded-pill px-2 py-1">
            <input
              type="text"
              name="search"
              placeholder="search"
              style={{ maxWidth: "140px" }}
              className="border-0"
            />
            <button className="btn btn-sm btn-outline-secondary border-0">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-row mt-1">
            <Link className="mx-2 text-decoration-none  fs-6 text-light" to="/">
              Home
            </Link>
            <Link
              className="mx-2 text-decoration-none fs-6 text-light"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="mx-2 text-decoration-none fs-6 text-light"
              to="/projects"
            >
              Projects
            </Link>
          </Nav>
        </Navbar.Collapse>
        <ButtonGroup>
          <Button variant="outline-light" className="d-none d-md-inline">
            <i className="fa-solid fa-moon"></i>
          </Button>
          <Button variant="outline-light fw-bold" href="/sign-in">
            Sign in
          </Button>
        </ButtonGroup>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <Link to="/action/3.1">Action</Link>
          <Link to="/action/3.2">Another action</Link>
          <Link to="/action/3.3">Something</Link>
          <NavDropdown.Divider />
          <Link to="/action/3.4">Separated link</Link>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;
