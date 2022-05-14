import "./login-and-signup.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navigation, Sidebar } from "../../components/compIndex";
import { useAuthContext } from "../../contexts/auth-context";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authCred, setAuthCred } = useAuthContext();
  const [passwordType, setPasswordType] = useState(true);
  const [confPasswordType, setConfPasswordType] = useState(true);
  const [signupCred, setSignupCred] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const from  = location.state?.from?.pathname || "/videolisting"

  const signupCredHandler = async ({
    firstname,
    lastname,
    email,
    password,
  }) => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== ""
    ) {
      try {
        const {
          data: { encodedToken },
        } = await axios.post("/api/auth/signup", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        });
        console.log(encodedToken);
        localStorage.setItem("TOKEN", encodedToken);
        setAuthCred({ ...authCred, authToken: encodedToken, authStatus: true });
        toast.success("Successfully Signed In");
        navigate(from, {replace : true})
      } catch (err) {
        toast.error("Error in signup");
        console.log(err);
      }
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
              signupCredHandler(signupCred);
            }}
          >
            <div className="credentials signup__form">
              <h1>Signup</h1>
              <div className="cred__input-field">
                <label>First Name</label>
                <input
                  placeholder="first name"
                  type="text"
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, firstname: e.target.value })
                  }
                />
              </div>
              <div className="cred__input-field">
                <label>Last Name</label>
                <input
                  placeholder="last name"
                  type="text"
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, lastname: e.target.value })
                  }
                />
              </div>
              <div className="cred__input-field">
                <label>Email adddress</label>
                <input
                  placeholder="akash@neog.com"
                  type="email"
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, email: e.target.value })
                  }
                />
              </div>
              <div className="cred__input-field password__field">
                <label>Password</label>
                <input
                  placeholder="password"
                  type={passwordType ? "password" : "text"}
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, password: e.target.value })
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
              <div className="cred__input-field password__field">
                <label>Confirm Password</label>
                <input
                  placeholder="confirm password"
                  type={confPasswordType ? "password" : "text"}
                  className={`${
                    signupCred.password !== signupCred.confirmPassword
                      ? "wrong__input"
                      : ""
                  }`}
                  onChange={(e) =>
                    setSignupCred({
                      ...signupCred,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {confPasswordType ? (
                  <i
                    className="bx bx-show"
                    onClick={() => setConfPasswordType(!confPasswordType)}
                  ></i>
                ) : (
                  <i
                    class="bx bx-hide"
                    onClick={() => setConfPasswordType(!confPasswordType)}
                  ></i>
                )}
              </div>
              <div className="cred__remember-forgot">
                <div className="remember__checkbox">
                  <input type="checkbox" />
                  <label>Accept all terms & conditions</label>
                </div>
              </div>
              <button type="submit" className="btn solid__primary cred__button">
                Signup
              </button>
              <Link to="/login">
                <div className="create__new-account">
                  Already have an account{" "}
                  <i className="bx bx-right-arrow-alt"></i>{" "}
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { Signup };
