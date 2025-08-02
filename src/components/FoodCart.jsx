import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from './useCart';

const FoodCart = ({item}) => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {_id,name,image,price,category} =item || {}
   const [,refetch] = useCart()
   
    const handleAddCart = ()=>{
        if(user&& user.email){
            const menuItem={
                menuId:_id,
                email:user.email,
                name,image,price,category,
            }
            axiosSecure.post('/carts',menuItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                  refetch()
                    Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} is added`,
  showConfirmButton: false,
  timer: 1500
});
                }
            })
        }

    }
   
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>{price}</p>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddCart} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCart;