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
      setErrorMessage(error.message);
    } finally {
      // Stop loading, whether login was successful or not
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className={`w-full rounded-md border ${isLoading ? 'cursor-not-allowed animate-pulse' : ''
              } border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          Don't have an account? <a href="/" className="text-gray-700 underline dark:text-gray-200">Register</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
