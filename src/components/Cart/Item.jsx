import { cross, del, jar3, rupee } from "../../assets/Images/Images";
import { removeItem } from "../../Store/Cart/CartSlice";
import { minus,plus } from "../../assets/Images/Images";
import { useDispatch,useSelector } from "react-redux";
import { incQty,decQty } from "../../Store/Cart/CartSlice";
export default function Item({id}) {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  ); 
  if (!item) return null;
  const { qty, price, weight } = item;
return(
    <div className="Item relative bg-white px-2 rounded-lg md:px-4 py-2 w-full flex gap-1 justify-between items-center">
        <div className="info flex justify-center gap-2 items-center">
            <div className="img w-[50px] overflow-hidden h-[50px] p-2 rounded-lg bg-main">
                <img src={jar3} loading="lazy" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="details">
                <h1 className="text-xs md:text-base font-bold w-32 md:w-40">100% Pure & Natural Apis Cerana Honey</h1>
                <p className="text-xs md:text-sm font-bold text-slate-600">{weight}kg</p>
            </div>
        </div>
        <div className="count flex justify-center w-4 md:w-8 items-center gap-1 md:gap-2">
          <img
            loading="lazy"
            src={minus}
            className="cursor-pointer w-4 md:w-6"
            onClick={()=>dispatch(decQty({id}))}
            alt=""
          />
          <p className="text-sm md:text-base font-bold min-w-[1rem] text-center ">{qty}</p>
          <img
            src={plus}
            loading="lazy"
            className="cursor-pointer w-4 md:w-6"
            onClick={()=>dispatch(incQty({id}))}
            alt=""
          />
        </div>
        <div className="price ml-5 flex justify-center items-center">
            <h1 className="text-sm md:text-base font-bold">&#8377;{price}</h1>
        </div>
        <div onClick={()=> dispatch(removeItem({id}))} className="w-5 md:w-8">
          <img src={del} className="w-full h-full object-cover object-center"></img>
        </div>
    </div>
)
}