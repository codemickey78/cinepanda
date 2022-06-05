import "../components.scss";
import { UserAuth } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import logoImg from "../../assets/img/favicon.ico";
import AngleDownSvg from "../../assets/img/angle-down.svg";
import profileImg from "../../assets/img/profile.jpeg";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const MainNavbar = () => {
  const { userState, logOutUser }: any = UserAuth();
  const [activeNav, setActiveNav] = useState(0);
  const navigate = useNavigate();

  const handleActiveNav = (eventKey: any) => {
    setActiveNav(eventKey);
  };

  const handleLogout = async () => {
    try {
      await logOutUser();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="main-navbar">
        <Container fluid className="px-5">
          <Navbar.Brand as={NavLink} to="/">
            <img src={logoImg} alt="logo" width={40} className="mr-2" />
            <span>CinePanda</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              activeKey={activeNav}
              onSelect={handleActiveNav}
              defaultActiveKey={activeNav}
            >
              <Nav.Link eventKey="home" as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link eventKey="upcoming" as={NavLink} to="/upcoming">
                Upcoming
              </Nav.Link>
              <Nav.Link eventKey="top-rated" as={NavLink} to="/top-rated">
                Top Rated
              </Nav.Link>
              <Nav.Link eventKey="tv-shows" as={NavLink} to="/tv-shows">
                TV Shows
              </Nav.Link>
              <Nav.Link eventKey="popular" as={NavLink} to="/popular">
                Popular
              </Nav.Link>
              <Nav.Link eventKey="stars" as={NavLink} to="/stars">
                People
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-3 mnav-right">
              <InputGroup>
                <FormControl
                  id="search"
                  type="text"
                  placeholder="Search"
                  aria-describedby="search"
                />
                <InputGroup.Text id="search">
                  <BiSearch />
                </InputGroup.Text>
              </InputGroup>
              {userState === null && (
                <NavLink to={"/login"}>
                  <Button className="navlogin-btn rounded-pill default-primary border-0">
                    Login
                  </Button>
                </NavLink>
              )}
              {userState !== null && (
                <Dropdown as={ButtonGroup} className="gap-2">
                  <Button>
                    <div>
                      <img
                        src={profileImg}
                        alt="profile"
                        width={30}
                        className="rounded-circle"
                      />
                    </div>
                  </Button>

                  <Dropdown.Toggle split id="dropdown-split-basic">
                    <img src={AngleDownSvg} alt="" width={10} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="rounded-4">
                    <Dropdown.Item as={NavLink} to="/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
