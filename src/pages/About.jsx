import HomeL from "../components/HomeL";
import HomeR from "../components/HomeR";

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-28 px-4 sm:px-10 md:px-20 py-6 sm:py-10 lg:mt-10 mb-4">
        <div className="flex-1 w-full md:w-auto order-2 lg:order-1 md:order-1" data-aos="fade-right">
          <HomeL />
        </div>
        <div className="flex-1 w-full md:w-auto order-1 lg:order-2 md:order-2" data-aos="fade-left">
          <HomeR />
        </div>
      </div>
    </div>
  );
};

export default About;
