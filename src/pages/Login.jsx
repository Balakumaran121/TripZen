import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });
   const navigate = useNavigate();
   const handleLogin = () => {
      if (
         formData.email.includes('balakumaran') &&
         formData.password.includes('121')
      ) {
         toast.success('Login successful');
         navigate('/dashboard');
      } else {
         toast.error('Invalid credentials');
      }
   };
   return (
      <div className="h-screen bg-gray-950 text-white flex items-center justify-center">
         <div className="w-1/3 text-5xl font-bold">TripZen</div>
         <div className="w-1/4">
            <div className="bg-gray-800  p-5 rounded-md flex flex-col gap-5">
               <div className="flex flex-col gap-2 ">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     placeholder="your@gmail.com"
                     className="bg-gray-600 rounded-md p-2"
                     value={formData.email}
                     onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                     }
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                     <label htmlFor="password">Password</label>
                     <label
                        htmlFor="Forgot"
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                     >
                        Forgot?
                     </label>
                  </div>
                  <input
                     type="password"
                     placeholder="your password"
                     className="bg-gray-600 rounded-md p-2"
                     value={formData.password}
                     onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                     }
                  />
               </div>
               <div className="flex justify-center items-center">
                  <button
                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                     onClick={handleLogin}
                  >
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
