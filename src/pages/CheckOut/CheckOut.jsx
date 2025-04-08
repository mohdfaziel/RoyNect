import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SEO from "../../components/SEO/SEO";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (cartItems.length === 0) {
      navigate("/product");
    }
  }, [user, cartItems, navigate]);

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://roynect.vercel.app/" },
    { name: "Products", url: "https://roynect.vercel.app/product" },
    { name: "Checkout", url: "https://roynect.vercel.app/checkOut" }
  ];

  return (
    <>
      <SEO 
        title="Checkout - RoyNect Honey"
        description="Complete your purchase of premium RoyNect honey products. Secure checkout process with multiple payment options available."
        keywords="checkout, honey purchase, secure payment, RoyNect honey, order confirmation"
        breadcrumbs={breadcrumbs}
      />
      <div className="w-full min-h-screen bg-[url(/bg.svg)] bg-cover bg-top">
        // ... existing code ...
      </div>
    </>
  );
} 