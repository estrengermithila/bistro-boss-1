import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async ()=> {
            const res = await axiosSecure.get('/users')
            return res.data
        }

    })
    const handleDelete= user=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`/users/${user._id}`)
    .then(res=>{
        if(res.data.deletedCount>0){
            refetch()
             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
    })
   
  }
});
    }
    const handleUpdateUser=(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res=>{
                if(res.data.modifiedCount>0){
                    refetch()
                    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
                }
            })
        
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
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
        users.map((user,idx)=> <tr key={user._id}>
        <th>{idx+1}</th>
        <td>{user.email}</td>
        <td>{
            user.role==='admin'?'Admin':<button onClick={()=> handleUpdateUser(user)}>User</button>
            }</td>
        <td onClick={() =>handleDelete(user)}>delete</td>
      </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;