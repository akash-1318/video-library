import "./login-and-signup.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navigation, Sidebar } from "../../components/compIndex";
import { useAuthContext } from "../../contexts/auth-context";
import {useThemeContext} from "../../contexts/theme-context"

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {theme} = useThemeContext();
  const { authCred, setAuthCred } = useAuthContext();
  const [passwordType, setPasswordType] = useState(true);
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

  const from  = location.state?.from?.pathname || "/videolisting"

  const loginHandler = async ({ email, password }) => {
    try {
      const {
        data: { encodedToken },
      } = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("TOKEN", encodedToken);
      setAuthCred({ ...authCred, authToken: encodedToken, authStatus: true });
      navigate(from, {replace : true})
      toast.success("You have logged in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navigation />
      <div className="main__container">
        <Sidebar />
        <div className="form__container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler(loginCred);
            }}
          >
            <div className={`credentials ${theme === "light" ? "" : "dark"}`}>
              <h1>Login</h1>
              <div className="cred__input-field">
                <label>Email adddress</label>
                <input
                  placeholder="akash@neog.com"
                  type="email"
                  onChange={(e) =>
                    setLoginCred({ ...loginCred, email: e.target.value })
                  }
                />
              </div>
              <div className="cred__input-field password__field">
                <label>Password</label>
                <input
                  placeholder="password"
                  type={passwordType ? "password" : "text"}
                  onChange={(e) =>
                    setLoginCred({ ...loginCred, password: e.target.value })
                  }
                />
                {passwordType ? (
                  <i
                    className="bx bx-show"
                    onClick={() => setPasswordType(!passwordType)}
                  ></i>
                ) : (
                  <i
                    class="bx bx-hide"
                    onClick={() => setPasswordType(!passwordType)}
                  ></i>
                )}
              </div>
              <div className="cred__remember-forgot">
                <div className="remember__checkbox">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <div className="forgot__password">Forgot your password?</div>
              </div>
              <button type="submit" className="btn solid__primary cred__button">
                Login
              </button>
              <button
                className="btn solid__primary cred__button"
                onClick={(e) => {
                  loginHandler({
                    email: "adarshbalika@gmail.com",
                    password: "adarshBalika123",
                  })
                  navigate(from, {replace : true})
                }}
              >
                Login as guest
              </button>
              <Link to="/signup" className="link__style">
                <div className="create__new-account">
                  create new account <i class="bx bx-right-arrow-alt"></i>{" "}
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { Login };
