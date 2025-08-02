import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    

    const {data:cart=[],refetch}=useQuery({
        queryKey:['carts',user?.email],
        queryFn:async() =>{
            const res =await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })


   


    return [cart,refetch]
};

export default useCart;