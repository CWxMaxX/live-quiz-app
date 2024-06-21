import React from 'react'

const SectionRow = ({className, children}) => {
  return (
    <div className={`flex-row flex ${className}`}>{children}</div>
  )
}

export default SectionRow