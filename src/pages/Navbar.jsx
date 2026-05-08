const Navbar = () => {
   return (
      <div className="bg-gray-800 text-white space-y-4 h-[91.7dvh] w-40 flex flex-col justify-between p-2">
         <div>
            <ul className="space-y-4 p-2">
               <li>Dashboard</li>
               <li>Trips</li>
               <li>Vehicle</li>
               <li>Customer</li>
               <li>Settings</li>
            </ul>
         </div>
         <div>
            <button className="bg-red-500 hover:bg-red-700 text-white rounded w-full h-10 hover:cursor-pointer text-lg font-medium">
               Logout
            </button>
         </div>
      </div>
   );
};

export default Navbar;
