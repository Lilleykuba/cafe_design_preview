import React from "react";
import HeroImg from "../../assets/coffee2.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex items-center justify-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              Přijdte se podívat do{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-primary font-cursive"
              >
                Vaší Kavárny
              </span>{" "}
              a ochutnat
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://lilleyjakub.com"
                className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="min-h-[450px] flex items-center justify-center order-1 sm:order-2"
          >
            <img
              src={HeroImg}
              alt="Hero Image"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
