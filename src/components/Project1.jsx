import React from 'react'
import Navbar from './Navbar'


const ProjectItem1 = () => {
    return (
<>
      <h1 id='projects' className='ml-7 pt-10 text-center intro text-white text-7xl'>Projects</h1>

        <div className='flex justify-center items-center'>
            
            <div className='px-8 mt-28 ml-16 w-[80%] h-[500px] bg-transparent'>
                <div className="flex w-full h-full">

                <div className='mr-4 h-full w-[500px] bg-gradient-to-br from-slate-900 to-slate-700 rounded-md shadowy'></div>
                <div className='ml-4 mr-4 h-full w-[500px]  bg-gradient-to-br from-slate-900 to-slate-700 rounded-md shadowy'></div>
                <div className='ml-4 h-full w-[500px]  bg-gradient-to-br from-slate-900 to-slate-700 rounded-md shadowy'></div>

                </div>
                </div>
             
        </div>
        </>
    )
}

const Projects = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-r from-slate-900 to-slate-700'>    
    <Navbar />
    <ProjectItem1 />
    </div>
  )
}

export default Projects