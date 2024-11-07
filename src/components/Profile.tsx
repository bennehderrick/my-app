import React from 'react';

interface ProfileProps {
  profileData: {
    name: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Profile: React.FC<ProfileProps> = ({ profileData, handleChange, handleSubmit }) => {
  return (
    <div className="flex-grow">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold sm:text-2xl">My Profile</h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="">
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;