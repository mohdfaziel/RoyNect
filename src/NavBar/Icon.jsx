import classNames from "classnames";

export default function Icon({bg,icon})
{
    const bgclass = {
        white: "bg-white",
        Dark2: "bg-Dark2",
    }[bg];
    return (
        <div className={classNames("w-[45px] p-1 flex justify-center items-center rounded-full h-[45px] cursor-pointer",bgclass)}>
            <img src={icon} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
    )
}