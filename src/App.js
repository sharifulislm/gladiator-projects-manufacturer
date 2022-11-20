
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Makeadmin from './Dashboard/Makeadmin';
import Myorders from './Dashboard/Myorders/Myorders';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Service/Purchase';
import RequireAdmin from './Pages/RequireAdmin/RequireAdmin';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Share/Footer/Footer';
import Login from './Pages/Share/Login/Login';
import SignUp from './Pages/Share/Login/SignUp';
import Navbar from './Pages/Share/Navbar/Navbar';
// import MyProfile from './Dashboard/MyProfile';
import AddProduct from './Dashboard/AddProduct';
import AddReview from './Dashboard/AddReview';
import Allusers from './Dashboard/Allusers';
import ManageOrdders from './Dashboard/ManageOrdders';
import ManageProducts from './Dashboard/ManageProducts';
import Reveiws from './Pages/Home/Reveiws/Reveiws';


import Payment from './Dashboard/Payment/Payment';
import Profile from './Dashboard/Profile';
import Blog from './Pages/Home/Blog/Blog';
import BussinessSummary from './Pages/Home/BussinessSummary/BussinessSummary';
import Contact from './Pages/Home/Contact/Contact';
// import RequireNurmaluser from './Pages/RequireAuth/RequireNurmaluser';
import NotFound from './Pages/NotFound';
// import Banner from './Pages/Home/Benner/Banner';
import AllReveiw from './Pages/Home/Reveiws/AllReveiw/AllReveiw';
import ShowAllreveiw from './Pages/Home/Reveiws/AllReveiw/ShowAllreveiw';
import NavbarTop from './Pages/Share/Navbar/NavbarTop';
import Search from './Pages/Share/Navbar/Search/Search';
// import StarRating from './Dashboard/StarRating';
// import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';


// firebase deploy
// https://rocky-thicket-49136.herokuapp.com/

function App() {
  return (
    <div className="">
      {/* <Navbars></Navbars> */}
      <NavbarTop></NavbarTop>
 <Navbar></Navbar>


 <div className=''>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>
<Route path='review' element={<Reveiws></Reveiws>}></Route>
<Route path='contact' element={<RequireAuth><Contact></Contact></RequireAuth>}></Route>
<Route path='blog' element={<Blog></Blog>}></Route>

<Route path='BussinessSummary' element={<BussinessSummary></BussinessSummary>}></Route>

<Route path='dashbord' element={<RequireAuth><Dashboard/> </RequireAuth> }>

{/* <Route path='myprofile' element={<MyProfile></MyProfile>}></Route> */}
<Route path='addreview' element={<AddReview></AddReview>}></Route>
<Route path='myorders' element={<RequireAuth><Myorders></Myorders></RequireAuth>}></Route>
<Route path='makeadmin' element={<RequireAuth> <RequireAdmin> <Makeadmin></Makeadmin></RequireAdmin> </RequireAuth>}></Route>
<Route path='allusers' element={<RequireAuth><RequireAdmin> <Allusers></Allusers> </RequireAdmin></RequireAuth>}></Route>
<Route path='addproduct' element={<RequireAuth> <RequireAdmin>   <AddProduct></AddProduct></RequireAdmin>  </RequireAuth>}></Route>
<Route path='manageorder' element={<RequireAuth> <RequireAdmin> <ManageOrdders></ManageOrdders></RequireAdmin> </RequireAuth> }></Route>
<Route path='ManageProducts' element={ <RequireAuth> <RequireAdmin><ManageProducts></ManageProducts> </RequireAdmin> </RequireAuth>}></Route>
<Route path='Profiles' element={<Profile></Profile>}></Route>
<Route path='Payment/:id' element={<Payment></Payment>}></Route>

</Route>
<Route path="Purchase/:serviceId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
{/* <Route path="Payment/:id" element={<Payment></Payment>}></Route> */}
<Route path='ShowReveiw' element={<ShowAllreveiw></ShowAllreveiw>}></Route>
<Route path='AllReveiw' element={<AllReveiw></AllReveiw>}></Route>
<Route path='signUp' element={<SignUp></SignUp>}></Route>
<Route path='Search' element={<Search></Search>}></Route>
<Route path='Login' element={<Login></Login>}></Route>
<Route path="*" element={<NotFound></NotFound>}></Route>

</Routes>


<ToastContainer />

</div>
<Footer></Footer>

    </div>
  );
}

export default App;
