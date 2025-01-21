import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/coffee-footer.jpg";

const FooterLinks = [
  { title: "Domů", link: "/#" },
  { title: "Nabídka", link: "/#nabidka" },
  { title: "O Nás", link: "/#o-nas" },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Vaše Kavárna
            </a>
            <p className="pt-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-span-2 flex justify-evenly md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Rozcestník
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index} className="">
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Kontakty
              </h1>
              <div>
                <p className="mb-3">Ulice, Město</p>
                <p>Tel. Číslo</p>
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
