import React, { useEffect,useState } from 'react'
import { back, empty } from '../../assets/Images/Images'
import Orders from './Orders'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import databaseService from '../../Firebase/Services/database'
import Loader from '../../components/Loader.jsx'
function MyOrders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user.userData);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if(!user) 
      {
        navigate('/');
        return;
      }
      const userId = user?.uid;
      document.body.style.cursor = 'wait';
      const userOrders = await databaseService.getUserOrders(userId);
      setOrders(userOrders);
      document.body.style.cursor = 'default';
      setLoading(false);
    };

    fetchOrders();
  }, [user]);
  if (loading) return <Loader/>;
  return (
    <div
      id="myOrders"
      className="w-full max-w-[102rem] md:min-h-[45rem]  overflow-x-hidden md:overflow-hidden px-2 md:px-[12rem] h-screen flex flex-col justify-center gap-1  items-center"
    >
    <div className='Container w-full min-h-[70%] max-h-[70%] flex flex-col justify-center items-center gap-3'>
    <div className='options w-full flex justify-start items-center'>
        <img src={back} onClick={()=>navigate("/")} className='md:w-10 w-7 transition-all hover:scale-105'></img>
        <h1 className='text-xl md:text-3xl font-extrabold'>My Orders</h1>
    </div>
    <div className="w-full h-full px-4 py-4  shadow-lg bg-main rounded-3xl">
    <div className='orders relative font-medium flex flex-col transition-all justify-center items-center gap-2 overflow-y-auto w-full h-full bg-white rounded-xl'>
       {orders.length>0? <Orders orders={orders}/> : (
        <div>
        <img src={empty} className='w-48 md:w-96'/>
        <h1 className='text-lg md:text-2xl text-[#3f3d56] font-semibold'>No Orders Found</h1>
        </div>
        )}
    </div>
    </div>
    </div>
    </div>
  )
}

export default MyOrders