export default function Social({icon,link})
{
    return (
        <a href={link} target="_blank" className="flex justify-center hover:scale-105 transition-all items-center p-2 rounded-full md:w-[45px] md:h-[45px] w-[30px] h-[30px] bg-white">
            <img src={icon} className="w-7" alt="" />
        </a>
    )
}