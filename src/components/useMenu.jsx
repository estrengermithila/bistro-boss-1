import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
    const axiosPublic=useAxiosPublic()
    // const [menu,setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('http://localhost:3000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //     })
    // },[])


    const {data:menu=[],refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/menu')
            return res.data
        }

    })



    return [menu,refetch]
};

export default useMenu;