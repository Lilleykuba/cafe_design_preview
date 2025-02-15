import React from "react";
import Logo from "../../assets/logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
  { id: 1, name: "Domů", link: "/#" },
  { id: 2, name: "Nabídka", link: "/#nabidka" },
  { id: 3, name: "O Nás", link: "/#o-nas" },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-4">
        <div className="flex justify-between items-center gap-4">
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-xl sm:text-2xl flex items-center justify-center gap-2 tracking-wide font-cursive text-nowrap"
            >
              <img src={Logo} alt="logo" className="w-12 pl-4 sm:pl-0" />
              Vaše Kavárna
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-end items-center gap-4 w-full"
          >
            <ul className="hidden sm:flex items-center justify-center gap-4">
              {Menus.map((data, index) => (
                <li key={index} className="">
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://lilleyjakub.com"
              className="btn bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3"
            >
              Přijďte k nám
              <FaCoffee className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
