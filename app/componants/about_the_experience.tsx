import Image from "next/image";
import React from "react";
import Image1 from "@/public/images/sec3_img1.webp";
import Image2 from "@/public/images/sec3_img2.webp";

const about_the_experience = () => {
  return (
    <div className="about_the_experience flex flex-row h-[40vh] justify-start items-start gap-36 px-12">
      <div className="flex flex-row gap-2">
        <Image
          src={Image1}
          alt="image"
          className="w-[260px] h-[180px] rounded-[100px]"
        />
        <Image
          src={Image2}
          alt="image"
          className="w-[260px] h-[180px] rounded-[100px]"
        />
      </div>
      <h4 className="text-secondary w-[46%] leading-10">
        A place where you can be with yourself and your loved ones. A place
        where you can experience unforgettable desert things.
      </h4>
    </div>
  );
};

export default about_the_experience;
