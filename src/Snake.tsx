import React from 'react'

const Snake = () => {
    return (
        <div>
            <div className='snake__Style'>

                <img src={require('./snake.png')} height="210px" width="200px"></img>

            </div>

            <div className='snake2__Style'>

                <img src={require('./snake.png')} height="400px" width="300px"></img>

            </div>

            <div className='snake3__Style'>

                <img src={require('./snake.png')} height="670px" width="300px"></img>

            </div>
        </div>
    )
}

export default Snake