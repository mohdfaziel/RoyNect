import React from "react";
import TextCard from "./TextCard";
import SEO from "../../components/SEO/SEO";

function Policies() {
  const policies = [
    {
      title: "Terms and Conditions",
      desc: "Welcome to RoyNect, your trusted source for premium Kashmiri honey and Apis Cerana honey from Bhadarwah. By accessing or using our website and services, you agree to comply with and be bound by these terms. Our services are subject to the following conditions:",
      points: [
        "You must provide accurate details while placing orders.",
        "Unauthorized use of our website is prohibited.",
        "Orders are subject to acceptance and availability.",
        "All payments are processed securely via Razorpay in Indian Rupees (INR).",
      ],
    },
    {
      title: "Privacy Policy",
      desc: "Your privacy is important to us. RoyNect collects, stores, and uses your data only to process your orders and improve our services. We ensure:",
      points: [
        "Your personal data is never shared without consent.",
        "Secure storage of sensitive information.",
        "Transaction details are processed securely through Razorpay.",
      ],
    },
    {
      title: "Refund & Cancellation Policy",
      desc: "At RoyNect, we strive to provide the highest quality Kashmiri honey and Apis Cerana honey. However, please review our policies below:",
      points: [
        "Orders can only be canceled if not shipped. Once shipped, cancellation is not possible.",
        "Due to the nature of our product, returns are not allowed. We ensure that every order is packaged and delivered with care.",
        "If you receive a damaged product, please report it within 24 hours of delivery with photos as proof.",
      ],
    },
    {
      title: "Shipping Policy",
      desc: "We ensure timely delivery of your premium honey through our trusted logistics partner, Delhivery.",
      points: [
        "Shipping timelines range from 3 to 7 business days, depending on location.",
        "Tracking details will be shared upon dispatch.",
        "We are not responsible for delays caused by courier services or unforeseen circumstances.",
      ],
    },
    {
      title: "Pricing in INR",
      desc: "All prices for our pure and natural Kashmiri honey products listed on RoyNect are in Indian Rupees (INR). Taxes, if applicable, are included unless explicitly stated otherwise.",
      points: [],
    },
    {
      title: "Contact Us",
      desc: "If you have any questions or concerns, feel free to reach out:",
      points: [
        "Email: roynectt@gmail.com",
        "Phone: +91 7006205934",
        "Address: Bhadarwah, Jammu & Kashmir, India",
      ],
    },
  ];
  return (
    <>
      <SEO 
        title="Terms and Conditions"
        description="Read our terms and conditions, privacy policy, and shipping information for RoyNect's premium Kashmiri honey and Apis Cerana honey products from Bhadarwah."
        keywords="terms and conditions, privacy policy, shipping policy, RoyNect honey, Kashmiri honey, Apis cerana honey, Bhadarwah honey, honey policies"
        ogImage="/mainImg2.png"
      />
      <div className="w-full md:bg-[url(/dripHoney.jpg)] bg-cover bg-top min-h-screen ">
        <div className="w-full h-[10rem] bg-radial-gradient md:bg-none md:h-[15rem] flex flex-col gap-1 justify-end pb-5 md:pb-10 items-center">
          <h1 className="text-slate-900  font-extrabold text-3xl md:text-6xl">
            TERMS OF SERVICE
          </h1>
          <p className="font-light md:font-semibold text-xs text-white px-3 md:px-4 py-1 md:py-2 rounded-full bg-slate-900">
            Updated Mar 9, 2025
          </p>
        </div>
        <div className="w-full bg-white md:bg-transparent min-h-screen px-3 py-5 md:py-10 flex justify-center items-start">
          <div className="container h-full w-full md:w-[60%] flex flex-col gap-5 md:gap-10">
            {policies.map((policy, index) => (
              <TextCard
                key={index}
                title={policy.title}
                desc={policy.desc}
                points={policy.points}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Policies;
