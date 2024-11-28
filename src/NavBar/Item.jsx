import classNames from "classnames";

export default function Item({ bg, txt, title ,onClick}) {
    const bgClass = {
        white: "bg-white",
        Dark2: "bg-Dark2",
    }[bg];

    const textClass = {
        active: "text-active",
        unactive: "text-unactive",
    }[txt];

    return (
        <div
            className={classNames(
                "px-3 md:px-4 py-1 md:py-2 cursor-pointer rounded-2xl flex w-fit justify-center items-center",
                bgClass
            )}
            onClick={onClick}
        >
            <p className={classNames("text-xs md:text-sm font-medium", textClass)}>{title}</p>
        </div>
    );
}
