import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
      .then(data => {
        console.log(data);
        setError(''); // Clear any previous errors
      })
      .catch(err => {
        console.log(err);
        setError('Registration failed. Please try again.'); // Set error message
      });
  };

  return (
    <div>
      <section className="event-banner py-16 flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-8">Register</h1>
          <p className="text-xl font-semibold">
            <Link to="/" className="text-cyan-500">Home</Link> / Register
          </p>
        </div>
      </section>
      <div className="py-20 bg-gray-100 py-12">
        <div className="max-w-lg p-8 mx-auto bg-white shadow-lg rounded-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Register now!</h1>
            <p className="mb-4 text-zinx-500">
              Join us to experience the best services. Let’s get started!
            </p>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleRegister}>
              <div className="form-control mb-4">
                <label className="label mb-2 text-lg">Email</label>
                <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mb-4">
                <label className="label mb-2 text-lg">Password</label>
                <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-cyan-500 text-white text-xl font-semibold w-full">Register</button>
              </div>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-cyan-500 underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
