import React from 'react'

function Container({children}) {
  return (
    <div className='mx-auto max-w-[1920px]'>{children}</div>
  )
}

export default Container