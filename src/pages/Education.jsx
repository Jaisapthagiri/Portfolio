import Edu from "../util/Edu";

const Education = () => {
  return (
    <section id="education" className="py-12 px-4 md:px-8" data-aos="fade-left">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[40px] text-gray-200/50 mb-4 hover:text-white">Education</h2>
        <p className="text-gray-600 text-2xl mb-10 max-w-xl mx-auto">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="space-y-8">
          {Edu.map((item,index) => (
            <div key={item.id}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              className="flex flex-col md:flex-row border lg:w-180 md:w-full lg:ml-35 border-blue-400 shadow-md rounded-lg p-6 gap-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05]">
              <div>
                <img
                  src={item.img}
                  className="w-20 h-12 mt-3 object-cover rounded-lg border"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-300">{item.school}</h3>
                <p className="text-sm text-gray-300 italic">{item.date}</p>
                <p className="text-sm text-gray-300">{item.degree}</p>
                <p className="text-sm text-gray-500">{item.grade}</p>
                <p className="text-sm text-gray-500 mt-2 max-w-150">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
