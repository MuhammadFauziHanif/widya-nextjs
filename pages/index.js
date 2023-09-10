import { useState } from 'react';
import { registerUser } from '../lib/api';
import { useRouter } from 'next/router';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    password_confirmation: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform password confirmation validation
    if (formData.password !== formData.password_confirmation) {
      setErrorMessage("Password and confirmation do not match.");
      setSuccessMessage(null);
      return;
    }

    // Start loading
    setIsLoading(true);

    try {
      const response = await registerUser(formData);
      const token = response.token;

      if (token) {
        localStorage.setItem('token', token);
        setSuccessMessage('Registration successful');
        setErrorMessage(null);
        console.log('Registration successful:', response);
        router.push('/profile');
      } else {
        // Handle registration error
        console.error('Registration error:', response.message);
        setErrorMessage(response.message);
        setSuccessMessage(null);
      }
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.message);
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } finally {
      // Stop loading, whether registration was successful or not
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Gender"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Gender
            </label>

            <select
              id="gender"
              name="gender"
              autoComplete="gender"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-span-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password Confirmation
            </label>

            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleInputChange}
            />
          </div>

          {errorMessage && (
            <div className="col-span-6">
              <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
            </div>
          )}

          {successMessage && (
            <div className="col-span-6">
              <p className="text-green-500 mt-2 text-center">{successMessage}</p>
            </div>
          )}

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className={`inline-block shrink-0 rounded-md border ${isLoading ? 'cursor-not-allowed animate-pulse' : ''
                } border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500`}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? 'Processing...' : 'Create an account'}
            </button>


            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              Already have an account? <a href="/login" className="text-gray-700 underline dark:text-gray-200">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
