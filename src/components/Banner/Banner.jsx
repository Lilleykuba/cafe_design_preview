import React from "react";
import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="o-nas"></span>
      <div style={bgImage} id="o-nas">
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="banner image"
                className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-cursive"
              >
                Moderní design
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quia, delectus repellendus numquam molestias libero deserunt
                quo, alias rem, velit cum fuga laboriosam. Dolorum eligendi
                laborum cum atque, tempora suscipit!
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Bezpečný hosting</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Responzivní design</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="300"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>SEO optimalizace</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="border-l-4 border-primary/50 pl-6 space-y-3"
                >
                  <h1 className="text-2xl font-semibold font-cursive">
                    Dynamické prvky
                  </h1>
                  <p className="text-sm text-gray-500">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, voluptas. Magni id tempore ab repudiandae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
