
import React from 'react'

function Summary({resumeInfo}) {
  return (
    <p className='text-xs'>
      {resumeInfo?.summery}
    </p>
  )
}

export default Summary