import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import googleLogo from '../assets/logo/google.png';
import registerAnimation from '../assets/lottie/animation_reg.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const swalSuccess = () => {
    return Swal.fire({
      title: 'Success!',
      text: 'Registered Successfully',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // password validation
    // if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
    //   return toast.error(
    //     'Password must be at least 6 characters long and include at least one capital letter and one special character'
    //   );
    // }
    createUser(email, password)
      .then(() => {
        // toast.success('Created user successfully!');
        updateUser(name, photo)
          .then(() => {
            // toast.success('Updated profile successfully!');
            // toast('Redirecting to Home!', {
            //   icon: '➡',
            // });
            swalSuccess();
            navigate('/');
          })
          .catch(error => toast.error(error.message));
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Successfully signed in using Google');

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
              <Lottie animationData={registerAnimation} loop={true}></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-2 px-5">
              <div className="card-body">
                <h1 className="text-4xl text-center font-semibold">Register</h1>
                <form onSubmit={handleRegister}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="your name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Link to your profile pic"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-secondary text-white capitalize"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                {/* google signup */}
                <div className="my-2">
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
                <p className="mt-2 text-center">
                  Already a member?{' '}
                  <Link to="/login" className="text-primary font-bold">
                    Login
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
export default Register;
