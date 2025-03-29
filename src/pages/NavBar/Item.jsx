// import classNames from "classnames";
// import { img } from "framer-motion/client";
// import { NavLink } from "react-router-dom";

// export default function Item({title,link,iconActive,iconUnactive}) {
//   return (
//     <NavLink
//       to={link}
//       className={({ isActive }) =>
//         `px-3 md:px-4 py-1 md:py-2 w-[30px] h-[30px] md:h-fit cursor-pointer hover:scale-105 transition-all rounded-full md:rounded-3xl flex md:w-fit justify-center items-center" ${
//           isActive ? "bg-white text-active" : "bg-Dark2 text-unactive"
//         }`
//       }
//     >
//        {({ isActive }) => (
//         <div>
//         <p
//           className={classNames(
//             "text-xs hidden md:block md:text-sm font-semibold",
//             {
//               "text-active": isActive,
//               "text-unactive": !isActive,
//             }
//           )}
//         >
//           {title}
//         </p>
//         <div
//           className="flex justify-center w-[20px] h-[20px] rounded-full overflow-hidden items-center md:hidden "
//         >
//            <img className="w-[100%] h-[100%] object-cover" loading="lazy" src={isActive ? iconActive : iconUnactive} alt="" />
//         </div>
//         </div>
//       )}
//     </NavLink>
//   );
// }
