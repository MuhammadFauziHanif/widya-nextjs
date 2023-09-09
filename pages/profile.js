import { useEffect, useState } from 'react';
import { getUserProfile } from '../lib/api';
import { useRouter } from 'next/router';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await getUserProfile();
        setUserProfile(response);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false); // Set loading state to false when data is fetched or an error occurs
      }
    }

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-8 w-[400px]">
      <h1 className="text-2xl font-semibold mb-4 text-center">Profile</h1>
      {isLoading && (
        <p className="text-gray-700 text-center animate-pulse">Loading...</p>
      )}
      {!isLoading && errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}
      {!isLoading && userProfile && (
        <div>
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{userProfile.name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">{userProfile.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Gender</dt>
                <dd className="text-gray-700 sm:col-span-2">{userProfile.gender}</dd>
              </div>
            </dl>
          </div>
          <div className="text-center">
            <button
              onClick={handleLogout}
              className=" text-center mt-4 inline-block shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;