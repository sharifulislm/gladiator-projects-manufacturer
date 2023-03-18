import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import useMyorder from '../../../Hooks/useMyorder';
import img from '../../../Imge/download (3).jfif';

const NavbarTop = () => {
    const [order] =useMyorder([])
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    const Logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    return (
        <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start pl-3">
       
          <a class="btn btn-ghost normal-case text-blod text-white text-xl">parts manufacturer</a>
        </div>
        <div class="navbar-end hidden lg:flex">

        </div>
        <div className='navbar-end pr-7 sm:visible invisible'>

        <div class="form-control text-lift pl-7 pr-5 mx-0 sm:visible invisible">
        <Link to="/Search"> <input type="text" placeholder="Search anything" class="input pr-40 input-bordered" /> </Link>
          </div>

      {user ?   
      // start condition profile and signOut and signin 
      <div class="dropdown dropdown-end">
   
          {
         user && <>
            <label tabindex="0" class="btn  btn-ghost btn-circle avatar">
       
       <div class="w-10  rounded-full sm:visible invisible">
         <img className='w-full' src={user?.photoURL || img} />
       </div>
     </label>
         </>
       }
 
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
      <div className='m-auto '>  
      {
         user && <>
            <label tabindex="0" class="btn  btn-ghost btn-circle avatar">
       
       <div class="w-20  rounded-full sm:visible invisible m-auto">
         <img className='w-full' src={user?.photoURL || img} />
       </div>
     </label>
         </>
       }
      </div>
      {/* // start condition profile and signOut and signin  */}
      
        <li className=' '>
        <li className='font-bold'><Link to="/dashbord/Profiles">Dashboard</Link></li>
        </li>
     
        { !admin &&
             <li className=' ml-10 font-bold'>
 <Link to="/dashbord/myorders">  My Orders <span class="indicator-item badge badge-secondary ">{order.length}</span> </Link></li>
        } 
        <li className='m-auto font-bold'><a onClick={Logout}>Logout</a></li>
      </ul>

    
          </div>
                  

                  :
                  <Link className=' text-blod text-white text-xl btn' to="/Login">Login</Link> 
                
                  }
      </div>
      </div>
    );
};

export default NavbarTop;