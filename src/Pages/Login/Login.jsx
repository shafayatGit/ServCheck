import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { loginUser, setUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  //   Google
  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    // console.log("google");

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Your account has been logged in successfully.");

        console.log(result);
      })
      .catch((error) => {
        toast.error("🚫 Login failed. Please try again.");
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/");
        toast.success("Your account has been logged in successfully.");
        console.log(res);
      })
      .catch((err) => {
        toast.error("🚫 Login failed. Please try again.");
        console.log(err);
      });
  };

  return (
    <Fade>
      {" "}
      <div>
        <div className="hero bg-gradient-to-br from-emerald-200 to-emerald-600 min-h-screen nuni">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-4xl bg-gradient-to-br from-emerald-800 to-emerald-300 bg-clip-text text-transparent font-bold">
                Login now!
              </h1>
            </div>
            <div className="card  bg-gradient-to-br from-emerald-200 to-emerald-600 shadow-emerald-200 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    <button
                      onClick={handleGoogleSignUp}
                      type="button"
                      className="hover:bg-emerald-200 active:bg-emerald-200 cursor-pointer w-full bg-white text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2 "
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      Sign up with Google
                    </button>
                    <div className="text-center text-white my-4">— or —</div>

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />

                    {/* PassWord */}
                    <label className="label">Password</label>
                    <input
                      name="password"
                      type="text"
                      className="input"
                      placeholder="password"
                    />

                    <button type="submit" className="btn btn-neutral mt-4">
                      Login
                    </button>
                  </fieldset>
                </form>
                <div className="flex gap-2 justify-center">
                  <h1>Don't have an account?</h1>
                  <Link className="text-black font-medium " to={"/register"}>
                    Register Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
