import React from 'react'

const SectionColumn = ({className, children}) => {
  return (
    <div className={`flex-col flex ${className}`}>{children}</div>
  )
}

export default SectionColumn