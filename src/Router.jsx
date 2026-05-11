import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Login from './pages/Login';
import CommonLayout from './layouts/CommonLayout';
import Errorpage from './pages/Errorpage';
import Trips from './pages/Trips';
import Vehicle from './pages/Vehicle';
import Settings from './pages/Settings';
import Customer from './pages/Customer';

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<CommonLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/settings" element={<Settings />} />
         </Route>
         <Route path="*" element={<Errorpage />} />
      </Routes>
   );
};

export default AppRouter;
