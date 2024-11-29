export default function Social({icon})
{
    return (
        <div className="flex justify-center items-center p-2 rounded-full w-[3rem] h-[3rem] bg-white">
            <img src={icon} alt="" />
        </div>
    )
}