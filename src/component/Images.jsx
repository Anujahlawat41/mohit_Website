import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import school1 from "../assets/5751739.jpg";
import school2 from "../assets/business-concept-with-graphic-holography.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

function Banner() {
  return (
    <section className="bg-[#E64626]">
      <div className="h-[90vh] relative">
        <Carousel
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-5 z-10 bg-black bg-opacity-50 text-white border-none rounded-full w-6 h-4 flex justify-center items-center cursor-pointer transition-colors duration-300 ease-in-out transform -translate-y-1/2"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 right-5 z-10 bg-black bg-opacity-50 text-white border-none rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition-colors duration-300 ease-in-out transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )
          }
        >
          <motion.div
            className="relative bg-gray-600 h-[90vh] text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0">
              <img
                src={school1}
                alt="home-screen-1"
                className="object-cover object-center w-20 h-20"
              />
            </div>
            <motion.div
              className="relative z-10 flex flex-col justify-center max-w-7xl mx-auto text-start h-full px-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="bg-[#E64626] text-white py-5 px-6 shadow-lg shadow-gray-400 text-lg font-semibold max-w-md"
                variants={textVariants}
              >
                <span className="md:text-3xl lg:text-3xl xl:text-3xl text-xl font-extrabold text-start">
                  Explore transformative knowledge
                </span>
                <hr className="mt-4 mb-4 opacity-75" />
                <span className="md:text-lg lg:text-lg xl:text-lg text-md font-normal text-start">
                  Equipping you with skills necessary for navigating the present
                  and shaping the future.
                </span>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[90vh] text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0">
              <img
                src={school2}
                alt="home-screen-2"
                className="object-cover object-center w-20 h-20 brightness-90"
              />
            </div>
            <motion.div
              className="relative z-10 flex flex-col justify-center items-end max-w-7xl mx-auto text-start h-full px-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="bg-[#E64626] text-white py-5 px-6 shadow-lg shadow-gray-400 text-lg font-semibold max-w-md"
                variants={textVariants}
              >
                <span className="md:text-3xl lg:text-3xl xl:text-3xl text-xl font-extrabold text-start">
                  Skills that advance you
                </span>
                <hr className="mt-4 mb-4 opacity-75" />
                <span className="md:text-lg lg:text-lg xl:text-lg text-md font-normal text-start">
                  Move faster in a world of swift technological change. Achieve
                  your goals and stay ahead with our training.
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
        </Carousel>
        {/* <ContactButton /> */}
      </div>
    </section>
  );
}

export default Banner;