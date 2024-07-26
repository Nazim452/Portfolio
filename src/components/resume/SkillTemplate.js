import React from 'react'

const SkillTemplate = ({img , name}) => {
  return (
    <div>
       <div className="bg-cover w-40 h-40  p-6 space-y-2 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex items-center justify-center flex-col">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                  <img className='className=w-20 h-20 bg-contain' src={img} alt="" />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white ml-3">{name}</h1>

              
            </div>
    </div>
  )
}

export default SkillTemplate
