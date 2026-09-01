import skills from "../util/Skill";

const Skil = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative z-[1] px-4">
        <div className="w-full max-w-[1000px] flex flex-col gap-4 items-center p-10">
          <div className="w-full flex flex-wrap justify-center gap-15 mt-8 mb-12">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="
                  w-full max-w-[500px]
                  border
                  rounded-2xl
                  p-5
                  sm:max-w-[400px]
                  xs:max-w-[330px]
                  transition-colors duration-300

                  bg-white/50
                  border-purple-500
                  dark:bg-[#1f1f1f]
                  dark:border-purple-500
                "
              >
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-slate-900
                    dark:text-gray-300
                    text-center
                    mb-4
                  "
                >
                  {skill.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-5 mb-2">
                  {skill.skills.map((item) => (
                    <div
                      key={item.name}
                      className="
                        flex items-center gap-2
                        border
                        text-sm
                        px-4 py-2
                        rounded-xl
                        transition-colors duration-300

                        border-slate-700/40
                        text-slate-800

                        dark:border-white/60
                        dark:text-white/80

                        sm:text-xs
                        sm:px-3
                        sm:py-1.5
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />

                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skil;
