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
                "px-4 py-1 cursor-pointer rounded-2xl flex w-fit justify-center items-center",
                bgClass
            )}
            onClick={onClick}
        >
            <p className={classNames("text-sm font-medium", textClass)}>{title}</p>
        </div>
    );
}
