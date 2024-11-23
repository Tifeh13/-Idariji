import { useAppContext } from "../ContextApi/ContextApi";

const Hero = () => {
  const { tabState } = useAppContext();
  return (
    <section className="flex justify-center items-center w-full mt-[8rem]">
      <div
        className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center w-[90%] bg-lightYellow rounded-2xl lmd:bg-[url('/svg/hero.svg')] bg-no-repeat bg-cover lmd:py-10"
        style={{
          backgroundBlendMode: "overlay", // Blend image with color
          backgroundColor: "rgba(255, 233, 224, .9)", // Light yellow with reduced opacity
        }}
      >
        <aside className="flex justify-center items-center">
          <div className="flex justify-start items-center w-[95%]">
            <h1 className="text-[#FF4C05] font-Abril lg:text-5xl text-4xl lmd:text-3xl lg:!leading-[5rem] lmd:!leading-[3rem] max-w-full lmd:text-center font-medium">
              Make the season count <br /> Gift your customer <br /> Make your Clients smile
            </h1>
          </div>
        </aside>
        <aside className="lg:block hidden">
          {tabState === "Merry Set" ? (
            <img
              src="/svg/hero.svg"
              alt="Shirt with Hoodies, band and many other things"
            />
          ): (
            <img
              src="/svg/hero1.svg"
              alt="Shirt with Hoodies, band and many other things"
            />
          )}
        </aside>
      </div>
    </section>
  );
};

export default Hero;
