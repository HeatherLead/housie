import React from "react";
import about from "../assets/about.webp";
const About = () => {
  return (
    <div>
      <div className="about  ml-20 mb-20  overflow-hidden">
        <h1 className=" text-white text-[200px]">WHO </h1>
        <h1 className="text-white  text-[200px]">ARE WE ?</h1>
      </div>
      <div className="  flex justify-center items-center mb-20 gap-20">
        <img className=" w-1/2" src={about} alt="" />
        <div className=" w-1/3">
          <h1 className=" text-4xl mb-5 font-bold">OUR MISSION</h1>
          <p className=" mb-5">
            Breathe life into your dream home with a 3D modeling website. Drag
            and drop walls, customize windows, and design your perfect layout.
            Experiment with roof styles, see how sunlight dances through rooms,
            and create a stunning visualization of your future abode. With
            user-friendly tools and extensive libraries, these websites empower
            you to become your own architect, all from the comfort of your
            couch.
          </p>
          <p>
            I wish you the best of luck with your business, enjoy the adventure.
          </p>
        </div>
      </div>
      <p className=" text-center text-2xl font-bold m-5 tracking-widest">
        Housie
      </p>
    </div>
  );
};

export default About;
