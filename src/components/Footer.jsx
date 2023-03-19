import NavBtn from "./NavBtn";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-20 very_small_section grid grid-cols-3 grid-rows-1 bg-gray-900 ">
      <ul className="col-start-1 col-span-1 h-full w-full flex flex-col justify-center text-4xl text-white px-10">
        <li className="inline-block mt-1 ">
          <a
            href="#"
            className="inline-block hover:text-gray-800 transition-all duration-150"
          >
            <FaFacebookSquare />
          </a>
        </li>
        <li className="inline-block mt-1">
          <a
            href="#"
            className="inline-block hover:text-gray-800 transition-all duration-150"
          >
            {" "}
            <FaYoutube />
          </a>
        </li>
        <li className="inline-block mt-1">
          <a
            href="#"
            className="inline-block hover:text-gray-800 transition-all duration-150"
          >
            {" "}
            <FaTwitterSquare />
          </a>
        </li>
        <li className="inline-block mt-1">
          <a
            href="#"
            className="inline-block hover:text-gray-800 transition-all duration-150"
          >
            <FaInstagramSquare />
          </a>
        </li>
      </ul>
      <ul className="col-start-2 col-span-1 w-full flex flex-col justify-center">
        <li className="inline-block"><NavBtn reveal={false} name="Contact Us" /></li>
        <li className="inline-block"><NavBtn reveal={false} name="FAQ" /></li>
        <li className="inline-block"><NavBtn reveal={false} name="Products" /></li>
        <li className="inline-block"><NavBtn reveal={false} name="See my portfolio" /></li>
      </ul>
      <h2 className="col-start-3 col-span-1 text-white font-extrabold text-4xl place-self-center mb-10">LOGO</h2>
    </footer>
  );
}

export default Footer;
