import { Link } from 'react-router-dom';

const Errorpage = () => {
   return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-950 text-white">
         <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
         <p>The page you are looking for does not exist.</p>
         <Link to="/dashboard" className="text-blue-500 text-lg font-semibold">
            Go back to Dashboard
         </Link>
      </div>
   );
};

export default Errorpage;
