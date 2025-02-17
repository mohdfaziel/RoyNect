import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export default function Footer() {
  return (
    <div
      id="certificates"
      className="About w-full px-[2rem] md:px-[10rem] py-[1rem] text-active -h-[5rem] bg-gradient-to-t from-Dark1 to-Dark2 flex justify-center items-center"
    >
      <motion.dev
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="container w-full flex flex-col gap-3 justify-center items-center"
      >
        <p className="text-sm text-active">
          Design & Built by <span className="text-white font-medium">Mohd Faziel</span> © 2024
        </p>
        <div className="SocialMedia flex justify-center items-center gap-3">
          <a href="mailto:mohdfazel969@gmail.com" target="_blank">
            <HiOutlineMail className="transition-all hover:scale-150" />
          </a>
          <a
            href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
            target="_blank"
          >
            <FaInstagram className="transition-all w-3 hover:scale-150" />
          </a>
        </div>
      </motion.dev>
    </div>
  );
}
