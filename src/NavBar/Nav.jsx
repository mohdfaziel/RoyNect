import { cart, Logo, person } from "../assets/Images/Images";
import Icon from "./Icon";
import Item from "./Item";
import { useState } from "react";
export default function Nav() {
  const [page, setPage] = useState("products");
  return (
    <div className="w-full z-50 md:px-[3rem] px-[1rem] flex top-7 transition-all justify-center items-center min-h-7 fixed bg-transparent">
      <div className="container bg-transparent py-2 w-[100%] flex justify-between items-center">
      <div className="Logo">
        <img src={Logo} className="md:w-32 w-24" alt="" />
      </div>
      <div className="Options flex justify-center items-center gap-5">
        <div className="hidden md:block">
        <Item
          bg={page === "products" ? "white" : "Dark2"}
          txt={page === "products" ? "active" : "unactive"}
          title="Products"
          onClick={() => setPage("products")}
        />
        </div>
        <Item
          bg={page === "about" ? "white" : "Dark2"}
          txt={page === "about" ? "active" : "unactive"}
          title="About us"
          onClick={() => setPage("about")}
        />
      </div>
      <div className="Actions flex justify-center items-center gap-3">
        <Icon bg="white" icon={person} />
        <Icon bg="Dark2" icon={cart} />
      </div>
      </div>
    </div>
  );
}
