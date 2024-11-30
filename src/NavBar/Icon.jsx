import classNames from "classnames";

export default function Icon({bg,icon})
{
    const bgclass = {
        white: "bg-white",
        Dark2: "bg-Dark2",
    }[bg];
    return (
        <div className={classNames("md:w-[45px] hover:scale-105 transition-all w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] md:h-[45px] cursor-pointer",bgclass)}>
            <img src={icon} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
    )
}