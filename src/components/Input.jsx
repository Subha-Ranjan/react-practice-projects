import React, { forwardRef } from 'react'

const cssClasses = 'w-full p-1 border-b-2 rounded-sm bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600'


const Input = forwardRef(
  //Fn with input tagwith where 'ref' is used
  function Input({label, textarea, ...props}, ref) {
    return (
      <p className='flex flex-col gap-1 my-4'>
          <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
          {textarea ? <textarea ref={ref} className={cssClasses} {...props}/> : <input ref={ref} className={cssClasses} {...props}/>}
      </p>
    )
  }
  
)

export default Input

