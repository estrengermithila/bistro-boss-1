import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from './useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin()
    return (
        <div className='flex gap-6'>
            <div className='w-64 min-h-screen bg-orange-500'>
       <ul className="menu">
    {
        isAdmin?
        <>
        <li>
        <NavLink to='/dashboard/adminHome'>Admin Home</NavLink>
        </li>
    <li>
        <NavLink to='/dashboard/addItem'>Add Items</NavLink>
        </li>
    <li>
        <NavLink to='/dashboard/manageItem'>Manage Items</NavLink>
        </li>
    <li>
        <NavLink to='/dashboard/manageBooking'>Manage Booking</NavLink>
        </li>
    
    <li>
        <NavLink to='/dashboard/users'>All Users</NavLink>
        </li>
        </>
        :<>
         <li>
        <NavLink to='/dashboard/userHome'>User Home</NavLink>
        </li>
    <li>
        <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
        </li>
    {/* <li>
        <NavLink to='/dashboard/payment'>Payment</NavLink>
        </li> */}
    <li>
        <NavLink to='/dashboard/addReview'>Add Review</NavLink>
        </li>
    <li>
        <NavLink to='/dashboard/booking'>My Booking</NavLink>
        </li>

        </>
    }
    
   

<div className="divider"></div>
<li>
        <NavLink to='/'>Home</NavLink>
        </li>


</ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;