import React from 'react'
import Experience from '../util/Experience';

const Experiences = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative border-l-2 border-purple-500/40 ml-3">
        {Experience.map((job) => (
          <div key={job.id} className="mb-10 ml-6">
            <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black" />

            <div className="bg-white/90 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {job.role}
                </h3>
                <span className="text-sm text-gray-400">{job.date}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-4">
                <span className="text-base font-semibold text-purple-500">
                  {job.company}
                </span>
                {job.location && (
                  <span className="text-sm text-gray-400 sm:before:content-['•'] sm:before:mx-2">
                    {job.location}
                  </span>
                )}
              </div>
                <ul className="list-disc list-inside space-y-2">
                  {job?.points?.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences;