import React from "react";
import banner from "../assets/images/about/about-us-banner-pic.jpg";
import ourCoffeeImg from "../assets/images/about/our-coffee-img.jpg";
import ourStoryImg from "../assets/images/about/our-story-pic.jpg";

const AboutPage = () => {
  return (
    <section>
      <div className="mb-10 mt-16 h-[25rem]">
        <img src={banner} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto flex flex-col items-center gap-10 lg:container">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <div className="flex gap-10">
          <div className="flex-1">
            <h2 className="mb-5 text-2xl font-semibold">Our Coffee</h2>
            <p className="text-justify">
              At Itori, we are dedicated to delivering the finest coffee
              experience to our customers. Our coffee journey begins with
              carefully selecting premium beans from renowned coffee-growing
              regions worldwide. Each batch of beans is meticulously roasted to
              perfection by our expert roasters, ensuring a rich and full-bodied
              flavor in every cup.
              <br />
              <br />
              We offer a wide range of coffee drinks, from classic espressos and
              lattes to innovative and refreshing iced coffees. Our baristas are
              skilled artisans who craft each beverage with precision and
              passion, creating a delightful coffee experience that keeps our
              customers coming back for more.
            </p>
          </div>
          <div className="h-full flex-1">
            <img
              src={ourCoffeeImg}
              alt=""
              className="h-[268px] w-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex-1">
            <img
              src={ourStoryImg}
              alt=""
              className="h-[268px] w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-5 text-right text-2xl font-semibold">
              Our Story
            </h2>
            <p className="text-justify">
              Itori Coffee Shop was born out of a shared love for coffee and a
              vision to create a community hub where people can connect and
              enjoy quality time together. Founded in [year], our journey
              started with a small team of coffee enthusiasts who believed in
              the power of a great cup of coffee to bring people together.
              <br />
              <br />
              From our humble beginnings, we have grown into a beloved local
              favorite, known for our exceptional coffee, warm atmosphere, and
              commitment to quality. Our journey continues as we strive to
              innovate and expand, always keeping our customers' satisfaction at
              the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
