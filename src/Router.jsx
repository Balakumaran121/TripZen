import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/orders" element={<Orders />} />
      </Routes>
   );
};

export default AppRouter;
