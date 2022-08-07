import React from 'react'

const ladder = () => {
  return (
    <div>
         <div className='ladder__Style'>

<img src={require('./ladder.png')} height="150px" width="100px"></img>

</div>


<div className='ladder1__Style'>

<img src={require('./ladder.png')} height="300px" width="100px"></img>

</div>

<div className='ladder2__Style'>

<img src={require('./ladder.png')} height="120px" width="100px"></img>

</div>

    </div>
  )
}

export default ladder