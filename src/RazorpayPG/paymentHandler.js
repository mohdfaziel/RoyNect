import Logo from "../assets/Images/Logo.png"; 

const paymentHandler = async (e, orderDetails, totalAmt, setOrderDetails) => {
  e.preventDefault();

  if (!window.Razorpay) {
    console.error("Razorpay SDK not loaded");
    return;
  }

  if (!orderDetails.id) {
    console.error("Order ID is missing");
    return;
  }

  const currency = "INR";

  let order;
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmt, currency, receipt: orderDetails.id }),
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

  var options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use environment variable for API key
    amount: totalAmt,
    currency,
    name: "Dawood Beekeeper",
    description: "Honey Purchase",
    image: Logo,
    order_id: order.id,
    handler: async function (response) {
      const body = { ...response };
      try {
        const validateRes = await fetch(`${import.meta.env.VITE_API_URL}/api/order/validate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const jsonRes = await validateRes.json();

        if (jsonRes?.msg === "success") {
          console.log("Payment success");
          setOrderDetails({ ...orderDetails, paymentStatus: "Paid", paymentId: jsonRes.paymentId });
        } else {
          console.error("Payment verification failed:", jsonRes?.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error during payment verification:", error);
      }
    },
    prefill: {
      name: orderDetails.name,
      email: orderDetails.email,
      contact: orderDetails.phone,
    },
    notes: { address: "Dawood-Beekeeper Online Honey Store" },
    theme: { color: "#FFCE23" },
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.description);
  });

  rzp1.open();
};

export default paymentHandler;
