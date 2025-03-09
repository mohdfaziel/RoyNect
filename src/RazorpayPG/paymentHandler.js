const paymentHandler = async (orderInfo, setOrderInfo) => {
  if (!window.Razorpay) {
    console.error("Razorpay SDK not loaded");
    return;
  }

  if (!orderInfo.orderId) {
    console.error("Order ID is missing");
    return;
  }

  const currency = "INR";

  let order;
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: (orderInfo.totalprice + orderInfo.shippingCost) * 100,
        currency,
        receipt: orderInfo.orderId,
      }),
    });
    order = await response.json();
  } catch (error) {
    console.error("Error while creating order:", error);
    return;
  }

  if (!order.id) {
    console.error("Invalid order data returned from backend:", order);
    return;
  }

  return new Promise((resolve, reject) => {
    var options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderInfo.totalprice * 100,
      currency,
      name: "Dawood Beekeeper",
      description: "Honey Purchase",
      image: "https://dawood-beekeeper.vercel.app/assets/Images/Logo.png",
      order_id: order.id,
      handler: async function (response) {
        try {
          const validateRes = await fetch(
            `${import.meta.env.VITE_API_URL}/api/order/validate`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );
          const jsonRes = await validateRes.json();
          console.log("Printing jsonRes:", jsonRes);

          if (jsonRes?.msg === "Payment successful") {
            const updatedOrderInfo = {
              ...orderInfo,
              paymentStatus: "Paid",
              paymentId: jsonRes.paymentId,
            };
            setOrderInfo(updatedOrderInfo);
            console.log("Payment success with updated data", updatedOrderInfo);
            resolve(updatedOrderInfo);
          } else {
            console.error(
              "Payment verification failed:",
              jsonRes?.error || "Unknown error"
            );
            reject(new Error("Payment verification failed"));
          }
        } catch (error) {
          console.error("Error during payment verification:", error);
          reject(error);
        }
      },
      prefill: {
        name: orderInfo.userName,
        email: orderInfo.userEmail,
        contact: orderInfo.userPhone,
      },
      notes: { address: "Dawood-Beekeeper Online Honey Store" },
      theme: { color: "#FFCE23" },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.log("Payment Failed: " + response.error.description);
      reject(new Error("Payment failed"));
    });

    rzp1.open();
  });
};

export default paymentHandler;
