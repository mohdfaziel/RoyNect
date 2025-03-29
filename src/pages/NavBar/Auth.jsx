import { useDispatch, useSelector } from "react-redux";
import UserDetails from "./UserDetails";
import { useState } from "react";
import Person from "../../components/Animations/Person";
export default function Auth() {
    const user = useSelector((state)=> state.user.userData);
    const status = useSelector((state)=> state.user.status);
    const [drop,setDrop] = useState(false);
    function setdrop(event)
    {
        event.stopPropagation();
        setDrop((prev)=> !prev);
    }
    document.body.onclick = ()=> setDrop(false);
    return (
      <div className="relative">
        <div onClick={setdrop} className="Login md:w-[45px] hover:scale-105 transition-all w-[30px] flex justify-center items-center overflow-hidden rounded-full h-[30px] md:h-[45px] cursor-pointer bg-gray-200">
       {
        !status? (<Person/>) : (
            <img src={user.photoUrl} className="w-full h-full object-cover" alt="" />
        )
       }
      </div>
      <UserDetails status={drop} setStatus={setdrop}/>
      </div>
    );
  }