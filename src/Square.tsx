import React from 'react'

const Square:React.FC<any> = (props) => {
  return (
    <div>
        <span className='column__Style'>{props.state}</span>
    </div>
  )
}

export default Square