import { useState } from 'react';
import { loginUser } from '../lib/api';
import { useRouter } from 'next/router';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await loginUser(credentials);

      if (response.token) {
        localStorage.setItem('token', response.token);
        router.push('/profile');
      } else {
        console.error('Login error:', response.message);
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage(response.message);
    } finally {
      // Stop loading, whether login was successful or not
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className={`w-full rounded-md border ${isLoading ? 'bg-gray-300 cursor-not-allowed animate-pulse' : 'border-blue-600 bg-blue-600'
              } px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Don't have an account? <a href="/" className="text-gray-700 underline">Register</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
