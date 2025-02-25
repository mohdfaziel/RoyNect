import classNames from "classnames";

export default function Quantity({bg,txt,weight,onClick}) {
    const bgClass = {
        active: "bg-active",
        Dark3: "bg-Dark3",
    }[bg];

    const textClass = {
        white: "text-white",
        unactive: "text-unactive",
    }[txt];
  return (
    <div onClick={onClick} className={classNames(bgClass,"w-[45px] hover:scale-105 transition-all p-1 flex justify-center items-center h-[45px] rounded-full")}>
      <p className={classNames(textClass,"text-sm font-semibold")}>{weight}</p>
    </div>
  )
}