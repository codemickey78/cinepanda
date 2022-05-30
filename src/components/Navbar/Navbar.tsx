import "../components.scss";
import { UserAuth } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

const MainNavbar = () => {
  const { userState, logOutUser }: any = UserAuth();
  const navigate = useNavigate();
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
          <Navbar.Brand href="#">
            <img src={logoImg} alt="logo" width={40} className="mr-2" />
            <span>CinePanda</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Browse</Nav.Link>
              <Nav.Link href="#action3">Movies</Nav.Link>
              <Nav.Link href="#action4">TV Shows</Nav.Link>
              <Nav.Link href="#action5">WatchList</Nav.Link>
              <Nav.Link href="#action6">Genres</Nav.Link>
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
                  <img src={AngleDownSvg} alt="" width={10}/>
                </Dropdown.Toggle>

                <Dropdown.Menu className="rounded-4">
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {userState?.email && (
        <>
          <div>{JSON.stringify(userState)}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </div>
  );
};

export default MainNavbar;
