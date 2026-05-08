import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Login from './pages/Login';
import CommonLayout from './layouts/CommonLayout';
import Errorpage from './pages/Errorpage';

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<CommonLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
         </Route>
         <Route path="*" element={<Errorpage />} />
      </Routes>
   );
};

export default AppRouter;
