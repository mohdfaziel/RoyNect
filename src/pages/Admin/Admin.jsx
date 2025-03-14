import React, { useEffect, useState } from "react";
import {
  ajar1,
  ajar2,
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
import databaseService from "../../Firebase/Services/database";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Option from "./Option";
import DashBoard from "./APages/DashBoard/DashBoard";
import Orders from "./APages/Orders";
import Users from "./APages/Users";
import Transactions from "./APages/Transactions";
import Restock from "./APages/Restock";
import OrderInfo from "./APages/OrderInfo/OrderInfo";

function Admin() {
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const [page, setPage] = useState("DashBoard");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const admin = useSelector((state) => state.user.userData);
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
      setUsers(allUsers.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(false);
    };

    fetchOrders();
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="w-full bg-Adark1 min-h-screen md:h-screen">
      <div className="container w-full flex flex-col md:flex-row bg-gray-100 h-full">
        <div className="left w-full md:w-[25%] bg-Aunactive flex py-5 flex-col justify-center items-center gap-3 md:gap-8">
          <div className="Founder flex justify-center items-center gap-2">
            {admin?.photoUrl && (
              <div className="Logo w-12 rounded-full overflow-hidden">
                <img src={admin?.photoUrl} className="w-full h-full"></img>
              </div>
            )}
            <div className="Name flex flex-col justify-center items-start">
              <h1 className="text-xl font-semibold">{admin.name}</h1>
              {admin.name==="Mohd Faziel" ? (<p className="text-sm font-medium">Founder</p>) : (<p className="text-sm font-medium">Partner</p>)}
            </div>
          </div>
          <div className="Pages w-full px-4 md:px-0 md:gap-4 flex md:flex-col justify-between md:justify-center items-center">
            <Option
              logo1={dashboard}
              logo2={dashboard2}
              title="DashBoard"
              page={page}
              setPage={setPage}
              setSelectedOrderId={setSelectedOrderId}
            />
            <Option
              logo1={orders1}
              logo2={orders2}
              title="Orders"
              page={page}
              setPage={setPage}
              setSelectedOrderId={setSelectedOrderId}
            />
            <Option
              logo1={users1}
              logo2={users2}
              title="Users"
              page={page}
              setPage={setPage}
              setSelectedOrderId={setSelectedOrderId}
            />
            <Option
              logo1={transaction1}
              logo2={transaction2}
              title="Transactions"
              page={page}
              setPage={setPage}
              setSelectedOrderId={setSelectedOrderId}
            />
            <Option
              logo1={ajar1}
              logo2={ajar2}
              title="Honey"
              page={page}
              setPage={setPage}
              setSelectedOrderId={setSelectedOrderId}
            />
          </div>
          <div
            onClick={() => Navigate("/")}
            className="exit transition-all w-7 hover:scale-105 md:w-[3rem]"
          >
            <img className="w-full h-full" src={exit}></img>
          </div>
        </div>
        <div className="right w-full px-2 md:px-10 py-[2rem] md:py-[7rem] h-screen bg-Adark1 flex justify-center items-center">
          {selectedOrderId != null ? (
            <OrderInfo orders={orders} selectedOrderId={selectedOrderId} setSelectedOrderId={setSelectedOrderId}/>
          ) : (
            <>
              {page === "DashBoard" && (
                <DashBoard orders={orders} users={users} setSelectedOrderId={setSelectedOrderId}/>
              )}
              {page === "Orders" && <Orders orders={orders} users={users} setSelectedOrderId={setSelectedOrderId}/>}
              {page === "Users" && <Users orders={orders} users={users} />}
              {page === "Transactions" && (
                <Transactions orders={orders} users={users} />
              )}
              {page === "Honey" && <Restock orders={orders} users={users} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
