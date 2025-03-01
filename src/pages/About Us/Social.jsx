export default function Social({icon,link})
{
    return (
        <a href={link} target="_blank" className="flex justify-center hover:scale-105 transition-all items-center p-2 rounded-full md:w-[45px] md:h-[45px] w-[35px] h-[35px] bg-white">
            <img src={icon} loading="lazy" className="w-7" alt="" />
        </a>
    )
}