import {
  aboutActive,
  aboutUnActive,
  brand,
  cart,
  jarActive,
  jarUnActive,
  Logo,
} from "../../assets/Images/Images";
import Auth from "./Auth";
import { toggleState } from "../../Store/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/Animations/Cart";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
export default function Nav() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  if (isAdminRoute) return null;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  function home() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Navigate("/");
  }
  const qty = useSelector((state) => state.cart.qty);
  return (
    <div className="Nav w-full z-30 md:px-[3rem] px-[1rem] flex top-1 transition-all justify-center items-center min-h-7 fixed">
      <div className="container bg-white/80 rounded-full shadow-md pl-1 md:p-2 w-[100%] flex justify-between items-center">
        <div onClick={home} className="Logo cursor-pointer bg-slate-800 rounded-full px-2 md:px-6 py-1 md:py-2">
          {/* <img src={brand} className="w-20 md:w-28" alt="RoyNect Logo - Premium Kashmiri Honey" /> */}
          <h1 className="text-xl md:text-4xl text-white font-hotSlice font-medium"><span className="text-main">R</span>oy<span className="text-main">N</span>ect<span className="text-main">.</span></h1>
        </div>
        <div className="Actions flex py-2 px-2 md:px-3 justify-center items-center gap-3">
          <Auth />
          <div
            onClick={() => dispatch(toggleState())}
            className="Cart relative md:w-[45px] hover:scale-105 transition-all w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] md:h-[45px] cursor-pointer bg-Dark2"
            aria-label="View Cart - RoyNect Premium Kashmiri Honey"
          >
            <Cart />
            <span className="absolute transition-all right-0 -top-1 p-2 rounded-full md:w-5 md:h-5 w-4 h-4 bg-white  flex justify-center items-center">
              <p className="md:text-xs text-[9px] font-bold">{qty}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
