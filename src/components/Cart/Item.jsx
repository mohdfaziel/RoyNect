import { cross, jar3, rupee } from "../../assets/Images/Images";
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
    <div className="Item relative bg-white px-2 rounded-lg py-2 w-full flex gap-1 justify-between items-center">
        <div className="info flex justify-center gap-2 items-start">
            <div className="img w-[50px] overflow-hidden h-[50px] p-2 rounded-lg bg-main">
                <img src={jar3} loading="lazy" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="details">
                <h1 className="text-xs font-bold w-32 md:max-w-36">100% Pure & Natural Apis Cerana Honey</h1>
                <p className="text-xs font-medium text-slate-600">{weight}kg</p>
            </div>
        </div>
        <div className="count flex justify-center items-center gap-1">
          <img
            loading="lazy"
            src={minus}
            className="cursor-pointer w-4"
            onClick={()=>dispatch(decQty({id}))}
            alt=""
          />
          <p className="text-sm font-bold min-w-[1rem] text-center ">{qty}</p>
          <img
            src={plus}
            loading="lazy"
            className="cursor-pointer w-4"
            onClick={()=>dispatch(incQty({id}))}
            alt=""
          />
        </div>
        <div className="price min-w-[3rem] flex justify-center items-center">
            <h1 className="text-sm font-bold">{price}</h1>
            <img src={rupee} loading="lazy" className="w-3" alt=""/>
        </div>
        <span onClick={()=> dispatch(removeItem({id}))} className="Delete p-1 -top-[7px] hover:bg-main transition-all -right-[7px] rounded-full w-5 h-5 overflow-hidden flex justify-center items-center bg-unactive absolute">
          <img src={cross} loading="lazy" className="w-full h-full object-cover" alt="" />
        </span>
    </div>
)
}