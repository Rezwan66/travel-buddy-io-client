import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import googleLogo from '../assets/logo/google.png';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/lottie/animation_lolfzbit.json';
import Swal from 'sweetalert2';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const swalSuccess = () => {
    return Swal.fire({
      title: 'Success!',
      text: 'Logged In Successfully',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // resetting the form
    e.currentTarget.reset();

    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        // toast.success('Signed in successfully!');
        swalSuccess();
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        // toast.success('Successfully signed in using Google');
        swalSuccess();
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div>
      <div className="mt-4 mb-16 max-w-7xl mx-auto">
        <div className="hero">
          <div className="hero-content lg:gap-52 flex-col lg:flex-row">
            <div className="w-1/2">
              {/* <img src={img} alt="" /> */}
              <Lottie animationData={loginAnimation} loop={true}></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-2 px-5">
              <div className="card-body">
                <h1 className="text-4xl text-center font-semibold">Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-secondary text-white capitalize"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                {/* google login */}
                <div className="my-4">
                  <div className="flex items-center mb-8">
                    <div className="border h-[1px] w-full"></div>
                    <p className="mx-2"> OR </p>
                    <div className="border h-[1px] w-full"></div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-info btn-outline w-full text-base capitalize px-8"
                    >
                      Continue with Google
                    </button>
                    <img
                      className="w-5 top-3 left-3 md:left-8 absolute"
                      src={googleLogo}
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-4 text-center">
                  New to TravelBuddy.io?{' '}
                  <Link to="/register" className="text-primary font-bold">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
