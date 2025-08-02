import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Menu from './components/Menu';
import OrderMenu from './components/OrderMenu';
import Login from './components/Login';
import AuthProvider from './AuthProvider';
import Register from './components/Register';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import AllUsers from './components/AllUsers';
import AddItems from './components/AddItems';
import ManageItems from './components/ManageItems';
import Payment from './components/Payment';
import PaymentHistroy from './components/PaymentHistroy';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/menu',
        element:<Menu/>
      },
      {
        path:'/order',
        element:<OrderMenu />
      },
      {
        path:'/order/:category',
        element:<OrderMenu />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
     
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard />,
    children:[
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'users',
        element:<AllUsers />
      },
      {
        path:'addItem',
        element:<AddItems/>
      },
      {
        path:'manageItem',
        element:<ManageItems />
      },
       {
        path:'payment',
        element:<Payment />
      },
      {
        path:'paymentHistory',
        element:<PaymentHistroy />
      },
      {
        path:'adminHome',
        element:<AdminHome/>
      },
      {
        path:'userHome',
        element:<UserHome />
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
     
   </AuthProvider>
  </StrictMode>,
)
