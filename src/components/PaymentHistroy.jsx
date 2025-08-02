import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const PaymentHistroy = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: payment=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
           
            <h1>Total Payments{payment.length}</h1>

<div>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payment.map((item,idx)=><tr key={item._id}>
        <th>{idx+1}</th>
        <td>{item.email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
</div>
        </div>
    );
};

export default PaymentHistroy;