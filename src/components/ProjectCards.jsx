
import Button from "./Button";

const ProjectCards = ({ project }) => {
  return (
    <div className="group w-[330px] h-[490px] mx-auto mb-10 cursor-pointer md:[perspective:1000px]">
      <div className="relative w-full h-full rounded-xl shadow-xl transition-transform duration-1000 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full mt-5 [backface-visibility:hidden] bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 flex flex-col gap-3">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[180px] object-cover mt-5 rounded-lg shadow mb-5"
          />

          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-800/20 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-5 dark:text-gray-100 text-center ml-[-12px]">
            {project.title}
          </h3>

          {/* <p className="text-xs text-gray-500 dark:text-gray-400">{project.date}</p> */}

          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 line-clamp-1">
            {project.description}
          </p>

          <div className="flex items-center mt-auto">
            {project.member?.map((member, index) => (
              <img
                key={index}
                src={member.img}
                alt={member.name}
                className="w-9 h-9 rounded-full object-cover -ml-2 border-2 border-zinc-100 dark:border-zinc-800 shadow"
              />
            ))}

            {project.link && (
              <div className="block sm:hidden ml-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>View App</Button>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full [backface-visibility:hidden] [transform:rotateY(180deg)] text-white rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mt-5 mb-5 text-center">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black font-semibold px-4 py-2 rounded text-sm mt-10 hover:text-black transition"
              >
                <Button>GitHub</Button>
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black font-semibold px-4 py-2 rounded text-sm -ml-20 mt-25 hover:text-black transition"
              >
                <Button>View Live</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
