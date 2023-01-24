import { UrlJsonRpcProvider } from "@ethersproject/providers";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const imageRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 300,

    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', event => {
      requestAnimationFrame(() => {
        const rotation = (window.scrollY / Math.PI) / 4;
        imageRef.current.style.transform = `rotate(${rotation}deg)`;
      });
    });
  }, []);

  return (
    // <div className="grid sm:grid-col-1" style={{ backgroundColor: "#1a1a1a" }}>
    <div className="grid sm:grid-col-1 overflow-hidden" style={{ backgroundColor: "#000000" }}>

      {/* <div
      
        // data-aos="flip-left"
        data-aos="fade"
        data-aos-easing="ease-in-out-quad"
        data-aos-duration="2000" 
        ref={imageRef}
        className="md:bg-contain sm:bg-contain pt-6 mb-14 bg-no-repeat  bg-[url('https://d2kq0urxkarztv.cloudfront.net/6244180ca38b7300311d579c/3597598/upload-7f0b1a55-c0f9-44c0-a6c6-01e2e643e8db.png?w=1833&e=webp&nll=true&cX=0&cY=94&cW=1920&cH=985')]"
        style={{ height: "100vh", width: "100vw", backgroundPosition: "305px -19px", 
        // transform: "rotateZ(90deg)"
       }}
      >
        
        <div className="px-6 pt-16 font-bold text-white ">
          <p style={{color: "violet",  fontSize: "48px", fontWeight: "800" }}>
            Get more out of your <br/>  Web3 Community
          </p>
          <p className="pt-7" style={{ fontSize: "18px",  fontWeight: "400" }}>
            Discover and meet like-minded NFT collectors <br/> just by connecting your
            wallet
          </p>
        </div> */}
      {/* <img src="https://d2kq0urxkarztv.cloudfront.net/6244180ca38b7300311d579c/3597598/upload-7f0b1a55-c0f9-44c0-a6c6-01e2e643e8db.png?w=1833&e=webp&nll=true&cX=0&cY=94&cW=1920&cH=985"
            style={{ width: '50%', height: '500px' }} /> */}
      {/* </div> */}






      <div
        data-aos="fade"
        data-aos-easing="ease-in-out-quad"
        data-aos-duration="2000"

        className=" flex xs:flex-col md:bg-contain xs:justify-center xs:items-center sm:bg-contain pt-6 xl:mb-14 lg:mb-14 md:mb-14 sm:mb-14 xs:mb-0 pl-5"
      >
        {/* style={{color: "violet",  fontSize: "48px", fontWeight: "800" }} */}
        <div><div className="transform -translate-x-4 z-50 relative sm:w-full  px-6 pt-16 pr-20 font-bold text-white md:w-[150%]">
          <p
            className="
              text-violet 
              font-extrabold 
              lg:text-5xl
              sm:text-2xl
              md:text-3xl 
              xl:text-6xl
              xs:text-2xl
            "
          >
            Get more out of your <br />  Web3 Community
          </p>
          {/* style={{ fontSize: "18px",  fontWeight: "400" }} */}
          <p className="pt-7 xl:text-lg xs:text-lg">
            Discover and meet like-minded NFT collectors <br /> just by connecting your
            wallet
          </p>

          <div className="getStartedButtonWrapper my-5 sm:my-9">
            <button className="border-none outline-none text-gray-300 bg-blue-900 hover:bg-blue-700 px-3 py-2 rounded-md lg:text-lg md:text-sm xl:text-lg sm:text-md font-medium font-mono">Get Started <FaArrowRight style={{display: "inline"}} size={15}/></button>
          </div>
        </div></div>

        <div className="xl:w-5/6 lg:w-3/5 md:w-5/6 sm:w-5/6 sm: pt-0 mt-0 xs:bottom-40 xs:relative">
          <img ref={imageRef} src="bgImg.png" className="xl:w-10/12 xl:h-full lg:w-10/12 md:w-5/6 sm:w-2/5 xs:w-4/5"
          // style={{ width: '100%', height: '549px', marginLeft: "130px" }}
          // style={{ width: '570px', height: '500px', marginLeft: "-31px" }}



          />

        </div>
      </div>





      <div className="w-full">
      <div className="flex xs:flex-col  xs:items-center xl:items-center xl:mt-10">
        <div
          // data-aos="fade-up-right"
          data-aos="fade-right"
          // data-aos-easing="ease-in-out-quad"
          data-aos-mirror="true"
          className="transform -translate-x-4 z-50 relative px-6 pt-16 font-bold text-white xl:w-3/5 lg:w-3/5 md:w-2/5 sm:1/5 "
        >
          {/* style={{ fontSize: "50px", color: "violet" }} */}
          <p className="xl:text-5xl lg:text-5xl xs:text-3xl md:text-4xl sm:text-sm sm:leading-10 xs:leading-10 " >More stuff to do</p>
          <p className="pt-2 xl:text-lg lg:text-lg md:text-sm xs:text-md" data-aos-duration="1000">
            The best communities are all about doing stuff together
          </p>
          <p className="pt-7 xl:text-lg lg:text-lg md:text-sm xs:text-sm">
            LTI is the best way to create those shared experiences with your
            web3 community
          </p>
        </div>
        <img
          // ref={imageRef}
          // data-aos="fade-up-left"
          data-aos="fade-left"
          // data-aos-easing="ease-in-out-quad"
          data-aos-mirror="true"
          src="https://d2kq0urxkarztv.cloudfront.net/6244180ca38b7300311d579c/3597598/upload-7f0b1a55-c0f9-44c0-a6c6-01e2e643e8db.png?w=1833&e=webp&nll=true&cX=0&cY=94&cW=1920&cH=985"
          // style={{ width: "500px", height: "350px" }}
          className="xl:w-2/4 lg:w-2/4 md:w-3/5 sm:1/5 lg:mr-20 xs:bottom-40 xs:relative xs:opacity-25"
        // style={{ width: "50%", height: "390px" }}
        />
      </div>
      </div>


      <div className="w-full">
      <div className="flex xs:flex-col xs:items-center xl:items-center xl:mt-10 xs:mt-0">
        <img
          // data-aos="fade-up-right"
          data-aos="fade-right"
          data-aos-mirror="true"
          src="https://d2kq0urxkarztv.cloudfront.net/62722f9d0e04c700147b96c5/3630681/upload-47ad347e-1d3a-433a-a1ab-677a576951b3.png?w=1075&e=webp&nll=true&cX=0&cY=18.83720930232562&cW=1080&cH=1042.3255813953488"
          // style={{ width: "500px", height: "410px" }}
          className="transform -translate-x-4 z-50 relative xl:w-2/4 lg:w-2/4 md:w-2/4"
        />
        <div
          // data-aos="fade-up-left"
          data-aos="fade-left"
          data-aos-mirror="true"
          className="px-6 pt-16 font-bold text-white sm:text-8 xl:w-3/5 lg:w-3/5 md:w-3/5 xs:bottom-96 xs:relative"
        >
          {/* fontSize: {md : "48px", lg :"48px", sm: "48px"} */}
          <p className="xl:text-5xl lg:text-5xl xs:text-3xl md:text-4xl sm:text-sm sm:leading-10 xs:leading-10 " >
            Empowering communities
          </p>
          <p className="pt-4 xl:text-lg lg:text-lg md:text-sm xs:text-md" >
            Community-only chat rooms that keep you connected with everyone else
            and up-to-date
          </p>
        </div>
      </div>
      </div>


      <div className="w-full">
      <div className="flex xs:flex-col xl:items-center xl:mt-10 xs:mt-0 mb-20">
        <div
          // data-aos="fade-up-right"
          data-aos="fade-right"
          data-aos-mirror="true"
          className="transform -translate-x-4 z-50 px-6 pt-16 font-bold text-white xs:text-sm sm:leading-10 xs:leading-10 xl:w-2/4 lg:w-2/4 md:w-2/4"
        >
          <p className="xl:text-5xl lg:text-5xl md:text-4xl xs:text-4xl">
            Participate with Ease
          </p>
          <p className="pt-4 xl:text-lg lg:text-lg md:text-sm xs:text-sm">
            Effortlessly initiate and participate in events, votes, proposals
            and other fun community activities
          </p>
        </div>
        <img
          // data-aos="fade-up-left"
          data-aos="fade-left"
          data-aos-mirror="true"
          src="https://d2kq0urxkarztv.cloudfront.net/6244180ca38b7300311d579c/3597598/upload-5e1ae2c8-31cb-4421-b5e4-2140bad773ae.png?w=1513&e=webp&nll=true&cX=0&cY=63&cW=1920&cH=952"
          // style={{ width: "500px", height: "380px" }}
          className="xl:w-2/4 lg:w-2/4 md:w-2/4 xs:bottom-40 xs:relative"
        />
      </div>
      </div>


    </div>
  );
}
