import React from 'react';
import useMenu from './useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from './useAxiosSecure';

const ManageItems = () => {
    const [menu,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDelete= (item)=>{
        console.log(item)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
 if (result.isConfirmed) {
    const res=await axiosSecure.delete(`/menu/${item._id}`)
    console.log(res.data)
    if(res.data.deletedCount>0){
        refetch()
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
    
   }
});
    }
    return (
        <div>
            <h1>Total Menu: {menu.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {menu.length}
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        menu.map((item,idx)=><tr key={item._id}>
        <th>
          {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>)
      }
     
    </tbody>

   
  </table>
</div>
        </div>
    );
};

export default ManageItems;