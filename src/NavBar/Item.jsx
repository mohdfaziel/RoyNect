import classNames from "classnames";

export default function Item({ bg, txt, title ,onClick,link}) {
    const bgClass = {
        white: "bg-white",
        Dark2: "bg-Dark2",
    }[bg];

    const textClass = {
        active: "text-active",
        unactive: "text-unactive",
    }[txt];

    return (
        <a href={link}
            className={classNames(
                "px-3 md:px-4 py-1 md:py-2 cursor-pointer hover:scale-105 transition-all rounded-2xl md:rounded-3xl flex w-fit justify-center items-center",
                bgClass
            )}
            onClick={onClick}
        >
            <p className={classNames("text-xs md:text-sm font-medium", textClass)}>{title}</p>
        </a>
    );
}
