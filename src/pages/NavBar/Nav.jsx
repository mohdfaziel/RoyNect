import {
  aboutActive,
  aboutUnActive,
  cart,
  jarActive,
  jarUnActive,
  Logo,
} from "../../assets/Images/Images";
import Item from "./Item";
import Auth from "./Auth";
import { toggleState } from "../../Store/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../assets/Animations/icons/Cart";

export default function Nav() {
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.cart.qty);
  return (
    <div className="w-full z-30 md:px-[3rem] px-[1rem] flex top-5 md:top-7 transition-all justify-center items-center min-h-7 fixed bg-transparent">
      <div className="container bg-transparent py-2 w-[100%] flex justify-between items-center">
        <div className="Logo">
          <img src={Logo} className="md:w-32 w-24" alt="" />
        </div>
        <div className="Options flex justify-center items-center gap-5">
          <Item
            title="Products"
            link=""
            iconActive={jarActive}
            iconUnactive={jarUnActive}
          />
          <Item
            title="About us"
            link="/about"
            iconActive={aboutActive}
            iconUnactive={aboutUnActive}
          />
        </div>
        <div className="Actions flex justify-center items-center gap-3">
          <Auth/>
          <div
            onClick={() => dispatch(toggleState())}
            className="Cart relative md:w-[45px] hover:scale-105 transition-all w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] md:h-[45px] cursor-pointer bg-Dark2"
          >
            <Cart/>
            <span className="absolute transition-all right-0 -top-1 p-2 rounded-full md:w-5 md:h-5 w-4 h-4 bg-white  flex justify-center items-center">
              <p className="md:text-xs text-[9px] font-bold">{qty}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
