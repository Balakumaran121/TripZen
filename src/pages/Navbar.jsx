import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();
   const NAV_ITEMS = [
      {
         id: 1,
         name: 'Dashboard',
      },
      {
         id: 2,
         name: 'Orders',
      },
      {
         id: 3,
         name: 'Trips',
      },
      {
         id: 4,
         name: 'Vehicle',
      },
      {
         id: 5,
         name: 'Customer',
      },
      {
         id: 6,
         name: 'Settings',
      },
   ];
   const handleLogout = () => {
      navigate('/login');
   };
   return (
      <div className="bg-gray-800 text-white space-y-4 h-[91.7dvh] w-40 flex flex-col justify-between p-2">
         <div>
            <ul className="space-y-4 p-2">
               {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                     <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <button
               onClick={handleLogout}
               className="bg-red-500 hover:bg-red-700 text-white rounded w-full h-10 hover:cursor-pointer text-lg font-medium"
            >
               Logout
            </button>
         </div>
      </div>
   );
};

export default Navbar;
