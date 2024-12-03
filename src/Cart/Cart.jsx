import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../Store/Cart/CartSlice";
export default function Cart({}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.state);
  const items = useSelector((state) => state.cart.items || []);
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      dispatch(toggleState());
    }
  };
  return (
    <div  className={`w-full h-screen fixed top-0 left-0 z-40 transition-all ${
        state ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={handleBackdropClick}>
         <div
        className="backdrop w-full h-full bg-black bg-opacity-50 absolute top-0 left-0"
        
      ></div>
       <div
        className={`container md:w-[30%] w-full flex transition-transform transform ${
          state ? "translate-x-0" : "translate-x-full"
        } flex-col justify-center items-start z-50 fixed top-0 right-0 h-full shadow-xl bg-radial-gradient`}
      >
        <h1 className="text-3xl font-extrabold m-2">Shopping Cart</h1>
        <div className="container overflow-y-auto flex flex-col justify-start items-center gap-3 mt-5 w-full h-screen px-2  py-2">
          {items.length > 0 ? (
            items.map((item) => <Item key={item.id} id={item.id} />)
          ) : (
            <p className="text-xl font-semibold text-center">
              Your cart is empty
            </p>
          )}
        </div>
        <div className="buttons h-[3rem] w-full fixed bottom-0">
          <button
            className="w-[50%] h-full bg-white text-xl font-bold"
            onClick={() => dispatch(toggleState())}
          >
            Back
          </button>
          <button className="w-[50%] h-full bg-main text-xl font-bold">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
