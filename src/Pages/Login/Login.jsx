import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(data => {
        console.log(data);
        setError(''); // Clear any previous errors
      })
      .catch(err => {
        console.log(err);
        setError('Login failed. Please check your credentials.'); // Set error message
      });
  };

  return (
    <div>
      <section className="event-banner py-16 flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-8">Login</h1>
          <p className="text-xl font-semibold">
            <Link to="/" className="text-cyan-500">Home</Link> / Login
          </p>
        </div>
      </section>
      <div className="py-20 bg-gray-100">
        <div className="max-w-lg p-8 mx-auto bg-white shadow-lg rounded-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Login now!</h1>
            <p className="mb-4 text-gray-600">
              Access your account and explore our services. Welcome back!
            </p>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-control mb-4">
                <label className="label mb-2 text-lg">Email</label>
                <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mb-4">
                <label className="label mb-2 text-lg">Password</label>
                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-cyan-500 text-xl text-white font-semibolf w-full">Login</button>
              </div>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-cyan-500 underline">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
