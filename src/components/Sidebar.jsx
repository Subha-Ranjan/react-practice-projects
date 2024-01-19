import React from 'react'
import Button from './Button'

export default function ProjectsSidebar({onStartAddProject , projects}) {
  return (
    <aside className='w-1/3 px-9 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 '>Your Projects</h2>
        <div>
          <Button btnText={'+ Add Project'} onClick={onStartAddProject}/>
          </div>
        <ul className='mt-8'>
          {projects.map(project=><li key={project.id}><button className='w-full text-left px-2 py-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'>{project.title}</button></li>)}
        </ul>
    </aside>
  )
}
