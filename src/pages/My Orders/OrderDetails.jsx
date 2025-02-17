import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Loader from "../../components/Loader";
import databaseService from "../../Firebase/Services/database";

function OrderDetails() {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        document.body.style.cursor = "wait";
        setLoading(true);

        const info = await databaseService.getOrder(orderId);

        if (info) {
          setOrderDetails(info);
        } else {
          console.log("No order found");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        document.body.style.cursor = "default";
        setLoading(false);
      }
    }

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <Loader/>;

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>
      <p>
        <strong>Quantity:</strong> {orderDetails.quantity}kg
      </p>
      <p>
        <strong>Total Price:</strong> ₹{orderDetails.totalPrice}
      </p>
      <p>
        <strong>Order Date:</strong>{" "}
        {orderDetails.orderDate
          ? format(new Date(orderDetails.orderDate.seconds * 1000), "dd MMM yyyy")
          : "N/A"}
      </p>
      <p>
        <strong>Status:</strong> {orderDetails.status}
      </p>
    </div>
  );
}

export default OrderDetails;
