import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
export default function NoProjectSelectSelected() {
  return (
    <div className='mt-24 text-center w-2/3 '>
        <img  src={noProjectImage} height='200px' alt='Empty task list' className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a Project or get started with a new one.</p>

        <p className='mt-8'>
            <Button btnText={'Create Project'}/>
        </p>

    </div>
  )
}
//line 7: my-4 ----> mt-4 + mb-4 
//mx-auto---> contered
//object-conatined---> image doesnot get distorted
