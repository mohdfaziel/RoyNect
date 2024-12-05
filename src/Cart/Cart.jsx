import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../Store/Cart/CartSlice";
import { back } from "../assets/Images/Images";
export default function Cart({}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.state);
  const items = useSelector((state) => state.cart.items || []);
  const totalHoney = useSelector((state) => state.cart.totalWeight);
  const totalCost = useSelector((state) => state.cart.total);
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      dispatch(toggleState());
    }
  };
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 z-40 transition-all ${
        state ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div className="backdrop w-full h-full bg-black bg-opacity-50 absolute top-0 left-0"></div>
      <div
        className={`container md:w-[30%] w-full flex transition-transform transform ${
          state ? "translate-x-0" : "translate-x-full"
        } flex-col justify-center items-start z-50 fixed top-0 right-0 h-full shadow-xl bg-radial-gradient`}
      >
        <div className="heading flex m-1 justify-start items-center">
          <img
            src={back}
            onClick={() => dispatch(toggleState())}
            className="w-10 hover:scale-105 transition-all"
            alt=""
          />
          <h1 className="text-3xl font-extrabold">Shopping Cart</h1>
        </div>

        <div className="container overflow-y-auto flex flex-col justify-start items-center gap-3 mt-5 w-full h-screen px-2  py-2">
          {items.length > 0 ? (
            items.map((item) => <Item key={item.id} id={item.id} />)
          ) : (
            <p className="text-xl font-semibold text-center">
              Your cart is empty
            </p>
          )}
        </div>
        <div className="buttons h-fit w-full fixed bottom-0">
          <div className="summary flex flex-col justify-center items-start gap-2 w-full p-2 bg-white">
          <h1 className="text-2xl font-semibold">Summary</h1>
          <div className="totalhoney w-full py-1 flex justify-between items-center border-b-[2px]">
            <h1 className="text-xl font-semibold">Total Honey (in kilograms)</h1>
            <p className="text-lg">{totalHoney}kg</p>
          </div>
          <div className="totalcost border-b-[2px] py-1 w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold">Total Cost (in rupees)</h1>
            <p className="text-lg">{totalCost} &#8377;</p>
          </div>
          </div>
          <button className="w-full opacity-50 h-[3rem] bg-main text-xl font-bold">
            Out Of Stock
          </button>
        </div>
      </div>
    </div>
  );
}
