import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="max-w-screen-xl flex text-[#11264D]   flex-wrap items-center py-4 md:pt-20  mx-auto md:px-16 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="order-2 md:order-1">
            <img src="asset/woman.png" alt="" />
          </div>

          <div className="order-1 md:order-2">
            <h1 className="mb-2">Social media Simplified</h1>
            <p className="text-xl mb-4 tracking-[1.14px] ">
              Tired of logging into each social media platform to post? Discover
              the power of our all-in-one social media management tool tailored
              to simplify your experience.
            </p>
            <p className="text-xl tracking-[1.14px] ">
              Say goodbye to countless hours of planning your social media
              campaign as our revolutionary tool streamlines the process,
              allowing you to accomplish it effortlessly within minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex text-[#11264D]   flex-wrap items-center py-4 md:pt-20  mx-auto md:px-16 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <div className="order-2 md:order-1">
            <h1 className="mb-2">
              Save Time for
              <br /> Great Content
            </h1>
            <p className="mt-4 text-xl tracking-[1.14px]">
              Our tool helps you - <br />
              <strong> Plan </strong> --{">"}
              <strong> Schedule </strong> "--{">"}
              <strong> Post </strong> <br />
              on all major platforms from one place. That means you can save
              time and focus on creating great content.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="asset/Girltab.png" alt="" />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto text-[#11264D]  py-4 md:pt-20  md:px-16 px-4">
        <h1 className="text-center mb-8">Features at a glance</h1>

        <div className="max-w-[1000px] mx-auto ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mt-12">
              <img src="asset/image 1.png" alt="" />
            </div>
            <div cla>
              <img src="asset/image 1.png" alt="" />
            </div>
            <div>
              <img src="asset/image 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
