import ProjectCards from '../components/ProjectCards';
import Proj from '../util/Proj';

const Project = () => {
  return (
    <div >
      <div className="w-full px-4 flex flex-col items-center" data-aos="fade-left" >
        <h1 className="text-[40px] text-center text-gray-200/50 dark:text-white mt-5 mb-4 hover:text-white">Projects</h1>
        <h1 className="text-center text-gray-500 text-2xl dark:text-gray-400 max-w-xl  mb-10">
          I have worked on a wide range of projects on web apps. Here are some of my projects.
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:gap-3 md:p-6 lg:px-40" data-aos="fade-right" >
        {Proj.map((project, idx) => {
          // For every 4th card (index 3, 6, 9, ...), center it under the gap between 1st and 2nd
          const isStaggered = (idx + 1) % 3 === 1 && idx !== 0;
          return (
            <div
              key={project.id}
              className={isStaggered ? 'col-span-1 col-start-2 flex justify-center' : ''}
            >
              <ProjectCards project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
