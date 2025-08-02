import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: stats} = useQuery({
        queryKey:['admin-stats'],
        queryFn:async() =>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    return (
        <div>
            <h1>Welcome {
                user?.email?user.email:"back"
            }</h1>
            <h1>Revenue: {stats?.revenue}</h1>
            <h1>Menu Items: {stats?.orders}</h1>
            <h1>Orders: {stats?.menuItem}</h1>
            <h1>Users: {stats?.users}</h1>
        </div>
    );
};

export default AdminHome;