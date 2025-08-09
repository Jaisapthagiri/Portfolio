import Edu from "../util/Edu";

const Education = () => {
  return (
  <section className="py-12 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[40px] text-gray-200/50 mb-4 hover:text-white">Education</h2>
        <p className="text-gray-600 text-2xl mb-10 max-w-xl mx-auto">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {Edu.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md rounded-xl p-8 max-w-xs flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:scale-[1.04]"
            >
              <div className="mb-4 w-full flex justify-center">
                {item.img && (
                  <img
                    src={item.img}
                    className="w-14 h-14 object-contain rounded-lg border border-gray-200 dark:border-zinc-700"
                    alt={item.school}
                  />
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 w-full text-center">{item.degree}</h3>
              <div className="text-center w-full">
                <div className="text-base text-gray-600 dark:text-gray-300 mb-1">{item.school}</div>
                <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                {item.grade && <div className="text-sm text-gray-500 mb-1 font-semibold">{item.grade}</div>}
                {item.desc && <div className="text-xs text-gray-500 mt-2">{item.desc}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
