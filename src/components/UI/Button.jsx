import React from 'react'

export default function Button({children, textOnly, className, ...props}) {
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
  return (
    <div className={cssClasses}>{children}</div>
  )
}
