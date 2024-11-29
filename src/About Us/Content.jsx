import { bees1, bees2, dadu, me } from "../assets/Images/Images";

export default function Content({ img, title, sentence, flag }) {
  return (
    <div
      className={`w-full flex h-[25rem] ${
        flag ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="img flex justify-center items-center w-[50%] h-full">
        <div className="w-[30rem] rounded-3xl overflow-hidden h-[20rem]">
          <img
            src={img}
            className="object-cover object-[center] w-[100%] h-[100%] top-4"
            alt=""
          />
        </div>
      </div>
      <div className="info w-[50%] flex justify-center items-center h-full">
        <div className="flex flex-col justify-center w-[30rem] gap-3 items-center">
          <h1 className="text-5xl font-extrabold text-center text-white">
            {title}
          </h1>
          <p className="text-lg font-medium text-justify">{sentence}</p>
        </div>
      </div>
    </div>
  );
}
