import { email, ig, me, whatsapp } from "../assets/Images/Images";
import Social from "./Social";

export default function Intro() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="img relative flex justify-center items-center w-[50%] h-full">
        <div className="w-[25rem] z-20 border-[1px] border-main h-[25rem] rounded-full overflow-hidden">
          <img
            src={me}
            className="w-full h-full object-cover object-[center]"
            alt=""
          />
        </div>
        <div className="absolute z-10 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40 bg-white "></div>
      </div>
      <div className="info  flex flex-col justify-center items-start gap-3 w-[50%] h-full">
        <h1 className="text-5xl font-extrabold text-white">
          Who Am I ?
        </h1>
        <p className="text-lg font-medium text-justify">
          I am{" "}
          <span className="font-semibold text-white">Dawood Ahmed Sheikh</span>,
          a passionate beekeeper from the picturesque town of{" "}
          <span className="font-semibold text-white">Bhaderwah</span>.
          Beekeeping is more than a profession to me—it’s a tradition and a
          craft I’ve cherished since learning it from my grandfather. With
          dedication and care, I personally extract honey from my hives,
          ensuring that every jar is a reflection of purity and authenticity.
        </p>
        <div className="icons flex justify-center items-start gap-3">
            <Social icon={ig} />
            <Social icon={email} />
            <Social icon={whatsapp} />
        </div>
      </div>
    </div>
  );
}
