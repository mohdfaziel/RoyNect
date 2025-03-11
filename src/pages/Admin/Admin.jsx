import React, { useEffect, useState } from "react";
import {
  dashboard,
  dashboard2,
  exit,
  orders1,
  orders2,
  transaction1,
  transaction2,
  users1,
  users2,
} from "../../assets/Images/Images";
import databaseService from '../../Firebase/Services/database'
import Loader from "../../components/Loader"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Option from "./Option";
import DashBoard from "./APages/DashBoard/DashBoard";
import Orders from "./APages/Orders";
import Users from "./APages/Users";
import Transactions from "./APages/Transactions";

function Admin() {
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const [page, setPage] = useState("DashBoard");
  const admin = useSelector((state) => state.user.userData);
  //Orders
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (admin?.role !== "admin") {
        Navigate("/");
        return;
      }
      const allUsers = await databaseService.getAllUsers();
      const allOrders = await databaseService.getAllOrders();
      setOrders(allOrders.reverse());
      setUsers(allUsers);
      setLoading(false);
    };

    fetchOrders();
  }, []);
  if (loading) return <Loader/>;
  return (
    <div className="w-full h-screen">
      <div className="container w-full flex bg-gray-100 h-full">
        <div className="left h-full w-[20%] bg-Aunactive flex flex-col justify-center items-center gap-8">
          <div className="Founder flex justify-center items-center gap-2">
            {admin?.photoUrl && (
              <div className="Logo w-12 rounded-full overflow-hidden">
                <img src={admin?.photoUrl} className="w-full h-full"></img>
              </div>
            )}
            <div className="Name flex flex-col justify-center items-start">
              <h1 className="text-xl font-semibold">Mohd Faziel</h1>
              <p className="text-sm font-medium">Founder</p>
            </div>
          </div>
          <div className="Pages gap-4 flex flex-col justify-center items-center">
            <Option
              logo1={dashboard}
              logo2={dashboard2}
              title="DashBoard"
              page={page}
              setPage={setPage}
            />
            <Option
              logo1={orders1}
              logo2={orders2}
              title="Orders"
              page={page}
              setPage={setPage}
            />
            <Option
              logo1={users1}
              logo2={users2}
              title="Users"
              page={page}
              setPage={setPage}
            />
            <Option
              logo1={transaction1}
              logo2={transaction2}
              title="Transactions"
              page={page}
              setPage={setPage}
            />
          </div>
          <div
            onClick={() => Navigate("/")}
            className="exit transition-all w-[3rem]"
          >
            <img className="w-full h-full" src={exit}></img>
          </div>
        </div>
        <div className="right w-[80%] px-10 py-[7rem] h-full bg-Adark1 flex justify-center items-center">
          {page === "DashBoard" && <DashBoard orders={orders} users={users}/>}
          {page === "Orders" && <Orders orders={orders} users={users}/>}
          {page === "Users" && <Users orders={orders} users={users}/>}
          {page === "Transactions" && <Transactions orders={orders} users={users}/>}
        </div>
      </div>
    </div>
  );
}

export default Admin;
