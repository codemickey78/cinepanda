import "../components.scss";
import logoImg from "../../assets/img/favicon.ico";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthForm = ({ authType }: any) => {
  const [mainAuthType, setMainAuthType] = useState("");

  useEffect(() => {
    console.log(authType);
    setMainAuthType(authType);
  }, [authType]);

  return (
    <div className="login-main">
      <div className="login-sub">
        <Link to="/">
          <div className="loginImg mb-2 justify-content-center d-flex align-items-center">
            <img src={logoImg} alt="logo" />
            <h6 className="m-0">CinePanda</h6>
          </div>
        </Link>
        <p className="m-0 text-center login-brief"></p>
        <div className="login-form">
          <form>
            {mainAuthType === "register" && (
              <div>
                <Form.Label htmlFor="fullname">Full Name</Form.Label>
                <InputGroup>
                  <FormControl
                    id="fullname"
                    type="text"
                    aria-describedby="fullname"
                  />
                  <InputGroup.Text id="fullname">
                    <AiOutlineUser />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            )}
            <div>
              <Form.Label htmlFor="email">Email</Form.Label>
              <InputGroup>
                <FormControl id="email" type="email" aria-describedby="email" />
                <InputGroup.Text id="email">
                  <MdAlternateEmail />
                </InputGroup.Text>
              </InputGroup>
            </div>
            {mainAuthType !== "forgot" && (
              <div className="mb-2">
                <Form.Label htmlFor="password">Password</Form.Label>
                <InputGroup>
                  <FormControl
                    id="password"
                    type="password"
                    aria-describedby="password"
                  />
                  <InputGroup.Text id="password">
                    <MdOutlinePassword />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            )}
            {mainAuthType === "login" && (
              <p className="login-forgot">
                Having trouble in sign in?{" "}
                <Link to="/reset-password">Reset Password</Link>
              </p>
            )}

            <Button
              className="default-primary submit-btn py-2 mt-2"
              type="submit"
            >
              {mainAuthType === "login" ? (
                <span>Login</span>
              ) : mainAuthType === "register" ? (
                <span>Register</span>
              ) : (
                <span>Reset Password</span>
              )}
            </Button>
          </form>
          <div className="login-others">
            {mainAuthType !== "forgot" && (
              <>
                <p className="login-forgot text-center mt-3 ">- Or sign in -</p>
                <div className="d-flex align-item-center justify-content-center">
                  <Button className="social-btn mt-2" type="button">
                    <FcGoogle /> Sign in with Google
                  </Button>
                </div>
              </>
            )}
            {mainAuthType === "login" ? (
              <p className="login-forgot text-center mt-3 ">
                Don't have an account? <Link to="/register">Register Now</Link>
              </p>
            ) : mainAuthType === "register" || mainAuthType === "forgot" ? (
              <p className="login-forgot text-center mt-3 ">
                I have an account. <Link to="/login">Sign In</Link>
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
