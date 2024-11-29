import { bees1, bees2, dadu, jars, kash, withbees } from "../assets/Images/Images";
import Content from "./Content";
import Intro from "./Intro";

export default function About() {
    const content = [
        {
            img: dadu,
            title: "A Legacy of Beekeeping",
            sentence: "I learned the art of beekeeping from my grandfather, Abdul Gani Sheikh, a true pioneer in this field. My grandfather’s guidance and teachings laid the foundation for everything I do today, and it is his legacy that continues to inspire my work as a beekeeper.",
            flag: true
        },
        {
            img: bees1,
            title: "Crafted by Nature",
            sentence: "Beekeeping is more than a job—it's a way of life. With immense care and dedication, I extract honey directly from the hives, ensuring it remains untouched by artificial processes.",
            flag: false
        },
        {
            img: withbees,
            title: "A Commitment to Quality",
            sentence: "Each year, I produce approximately 40-50 kilograms of honey. The process of extraction is carried out by me personally, ensuring that every drop is free from additives or impurities.",
            flag: true
        },
        {
            img: jars,
            title: "Affordable Sweetness",
            sentence: "Each year, I produce approximately 40-50 kilograms of honey. The process of extraction is carried out by me personally, ensuring that every drop is free from additives or impurities.",
            flag: false
        },
        {
            img: bees2,
            title: "Pure Goodness",
            sentence: "With every spoonful of our honey, you’ll taste the difference that comes from pure, natural ingredients.",
            flag: true
        },
        {
            img: kash,
            title: "Taste of Tradition",
            sentence: "Our honey isn’t just a product, it’s the result of years of tradition, passion, and dedication. Treat yourself to a taste of tradition and enjoy the finest honey available.",
            flag: false
        }
    ]
  return (
    <div id="about" className="w-full flex flex-col justify-center items-center px-[3rem] min-h-screen">
        <Intro />
        <div className="container w-full min-h-screen flex flex-col gap-10 justify-center items-center">
            <h1 className="text-white text-6xl font-extrabold">The Story Behind the Hive</h1>
          {content.map((item, index) => <Content key={index} img={item.img} title={item.title} sentence={item.sentence} flag={item.flag} />)}
        </div>
    </div>
  );
}
