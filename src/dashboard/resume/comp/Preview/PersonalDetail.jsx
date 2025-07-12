import React from 'react'

function PersonalDetail({resumeInfo}) {
  return (
    <div>
        <h2>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
    </div>
  )
}

export default PersonalDetail