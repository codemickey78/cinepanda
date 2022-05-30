import "../components.scss";
import logoImg from "../../assets/img/favicon.ico";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../context/AuthContext";

const AuthForm = ({ authType }: any) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mainAuthType, setMainAuthType] = useState("");
  const { loginUser, forgotPass, registerUser }: any = UserAuth();

  const onFormSubmit = async (data: any) => {
    try {
      if (authType === "login") {
        await loginUser(data.Email, data.Password);
        navigate("/");
        console.log("logged in");
      } else if (authType === "register") {
        const regUser = await registerUser(data.Email, data.Password);
        navigate("/");
        console.log("registered!");
      } else if (authType === "forgot") {
        await forgotPass(data.Email);
        navigate("/login");
        console.log("Check your email for password reset instructions.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
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
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {mainAuthType === "register" && (
              <div>
                <Form.Label htmlFor="fullname">Full Name</Form.Label>
                <InputGroup>
                  <FormControl
                    id="fullname"
                    type="text"
                    aria-describedby="fullname"
                    {...register("Fullname", {
                      required: {
                        value: true,
                        message: "Fullname is required.",
                      },
                      minLength: {
                        value: 5,
                        message: "Must be at least 5 characters",
                      },
                      maxLength: {
                        value: 70,
                        message: "Must be 70 characters max",
                      },
                    })}
                  />
                  <InputGroup.Text id="fullname">
                    <AiOutlineUser />
                  </InputGroup.Text>
                </InputGroup>
                {errors?.Fullname && (
                  <small className="d-inline-flex px-2 py-1 text-danger bg-danger mt-2 bg-opacity-10 border-danger border-opacity-10 rounded-2">
                    {errors?.Fullname.message}
                  </small>
                )}
              </div>
            )}
            <div>
              <Form.Label htmlFor="email">Email</Form.Label>
              <InputGroup>
                <FormControl
                  id="email"
                  type="email"
                  aria-describedby="email"
                  {...register("Email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email is incorrect",
                    },
                  })}
                />
                <InputGroup.Text id="email">
                  <MdAlternateEmail />
                </InputGroup.Text>
              </InputGroup>
              {errors?.Email && (
                <small className="d-inline-flex px-2 py-1 text-danger bg-danger mt-2 bg-opacity-10 border-danger border-opacity-10 rounded-2">
                  {errors?.Email.message}
                </small>
              )}
            </div>
            {mainAuthType !== "forgot" && (
              <div className="mb-2">
                <Form.Label htmlFor="password">Password</Form.Label>
                <InputGroup>
                  <FormControl
                    id="password"
                    type="password"
                    aria-describedby="password"
                    {...register("Password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 8,
                        message: "Must be at least 8 character ",
                      },
                    })}
                  />
                  <InputGroup.Text id="password">
                    <MdOutlinePassword />
                  </InputGroup.Text>
                </InputGroup>
                {errors?.Password && (
                  <small className="d-inline-flex px-2 py-1 text-danger bg-danger mt-2 bg-opacity-10 border-danger border-opacity-10 rounded-2">
                    {errors?.Password.message}
                  </small>
                )}
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
