import { Fuel } from 'lucide-react';

const Header = () => {
   return (
      <div className="bg-gray-950 text-white py-4 flex justify-between items-center px-4">
         <div className="flex justify-between  gap-4">
            <div className="bg-sky-500 rounded-md size-10 flex justify-center items-center">
               <Fuel />
            </div>
            <div className="">
               <h2 className="font-black text-xl tracking-wider">TripZen</h2>
               <h6 className="text-sm">Free Tier</h6>
            </div>
         </div>
         <div className="w-1/3">
            <input
               type="text"
               className="bg-gray-800 px-4 py-2 rounded w-full placeholder:text-gray-200"
               placeholder="Search..."
            />
         </div>
         <div className="rounded size-12 bg-gray-700 flex items-center justify-center">
            BK
         </div>
      </div>
   );
};

export default Header;
