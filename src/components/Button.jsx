import React from 'react'

export default function Button({btnText, ...props}) {
  return (
    <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100' {...props}>{btnText} </button>

  )
}


//...props ===> govess flexibility : if we want to add or modify any classes n all