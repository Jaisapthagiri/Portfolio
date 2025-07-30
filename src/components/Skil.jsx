import skills from '../util/Skill';

const Skil = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative z-[1] px-4">
        <div className="w-full max-w-[1000px] flex flex-col gap-4 items-center p-10">
          <div className="w-full flex flex-wrap justify-center gap-15 mt-8 mb-12">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="w-full max-w-[500px] bg-[#1f1f1f] border border-purple-500 rounded-2xl p-5 sm:max-w-[400px] xs:max-w-[330px]"
              >
                <h3 className="text-2xl font-semibold text-gray-300 text-center mb-4">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-5 mb-2">
                  {skill.skills.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 border border-white/60 text-white/80 text-sm px-4 py-2 rounded-xl sm:text-xs sm:px-3 sm:py-1.5"
                    >
                      <img src={item.image} className="w-6 h-6 object-contain" />
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
