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
      className="fixed-top text-light p-4"
      style={{ background: "#4758b3" }}
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-light" to="/">
            <span className="bg-danger px-2 py-1 fw-bold rounded shadow">
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
          <Button
            variant="outline-light"
            className="d-none d-md-inline border-0"
          >
            <i className="fa-solid fa-moon"></i>
          </Button>
          {currentUser ? (
            <NavDropdown
              title={<img
                src={currentUser.profilePicture}
                alt="profile picture"
                width="45px"
                className="rounded-circle"
              ></img>}
              className="mx-3 my-2"
              id="basic-nav-dropdown"
            >
              <header className="text-dark fs-6 mx-1">
                <span className="fst-italic text-primary">
                  @{currentUser.username}
                </span>
                <br />
                {currentUser.email}
              </header>
              <hr />
              <div className="text-center ">
                <Link
                  className="text-decoration-none text-primary  w-100 "
                  to="#"
                >
                  Profile
                </Link>
                <hr />
                <Link className="text-decoration-none text-danger w-100" to="#">
                  sign out
                </Link>
              </div>
            </NavDropdown>
          ) : (
            <Button variant="outline-primary">
              <Link
                className="text-decoration-none fw-bold text-light"
                to="/sign-in"
              >
                sign in
              </Link>
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}

export default NavBar;
