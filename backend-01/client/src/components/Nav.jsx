
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              {/* <img className="block lg:hidden h-8 w-auto" src="/img/logo.svg" alt="Logo" />
              <img className="hidden lg:block h-8 w-auto" src="/img/logo.svg" alt="Logo" /> */}
              <h1 className="text-2xl font-bold text-black">Mobin</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
          <NavLink to="/" className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => ({color: isActive ? "red" : "black"})} >Home</NavLink>
          <NavLink to="/create" className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => ({color: isActive ? "red" : "black"})} >Create User</NavLink>
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          
          <NavLink to="/" className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => ({color: isActive ? "red" : "black"})} >Home</NavLink>
          <NavLink to="/create" className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => ({color: isActive ? "red" : "black"})} >Create User</NavLink>
          <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

