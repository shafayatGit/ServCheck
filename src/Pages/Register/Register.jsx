import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { createUser, updateUser, setUser, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  //   For google
  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
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

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // const formData = new FormData(form);
    // const { email, password, ...rest } = Object.fromEntries(formData.entries());

    if (password.length < 6) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title:
          '<p class="font-bold work text-xl">Password length must be at least 6 character </p>',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title:
          '<p class="font-bold work text-xl">Must have a Lowercase letter in the password</p>',
        showConfirmButton: false,
        timer: 2000,
      });

      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title:
          '<p class="font-bold work text-xl">Must have an Uppercase letter in the password</p>',
        showConfirmButton: false,
        timer: 2000,
      });

      return;
    }

    createUser(email, password)
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
          <div className="hero-content mt-10   flex-col ">
            <div className="text-center">
              <h1 className="text-4xl bg-gradient-to-br from-emerald-800 to-emerald-300 bg-clip-text text-transparent font-bold">
                Register now!
              </h1>
            </div>
            <div className="card  bg-gradient-to-br from-emerald-200 to-emerald-600 shadow-emerald-200 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleRegister}>
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
                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Name"
                    />
                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />
                    {/* PhotoURL */}
                    <label className="label">PhotoURL</label>
                    <input
                      name="photoUrl"
                      type="text"
                      className="input"
                      placeholder="PhotoURL"
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
                      Register
                    </button>
                  </fieldset>
                </form>
                <div className="flex gap-2 justify-center">
                  <h1>Already have an account?</h1>
                  <Link className="text-black font-medium " to={"/login"}>
                    Login
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

export default Register;
