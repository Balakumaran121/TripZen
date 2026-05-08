import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';

const CommonLayout = () => {
   return (
      <div>
         <Header />
         <div className="flex gap-2">
            <Navbar />
            <Outlet />
         </div>
      </div>
   );
};

export default CommonLayout;
