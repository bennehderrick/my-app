import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold sm:text-2xl">Accounts & Settings</h1>

        <ul className="mt-6 space-y-1">
          <li>
            <Link
              to="/"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location.pathname === '/' ? 'bg-gray-200 text-gray-700' :  'text-gray-500'
              } hover:bg-gray-100 hover:text-gray-700`}
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/workspace"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location.pathname === '/workspace' ? 'bg-gray-200 text-gray-700' : 'text-gray-500'
              } hover:bg-gray-100 hover:text-gray-700`}
            >
              Workspace
            </Link>
          </li>
          <li>
            <Link
              to="/billing"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location.pathname === '/billing' ? 'bg-gray-200 text-gray-700' : 'text-gray-500'
              } hover:bg-gray-100 hover:text-gray-700`}
            >
              Billing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;