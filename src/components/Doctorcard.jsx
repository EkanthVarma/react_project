import React from 'react'

function Doctorcard({name, gender, specialization}) {
  return (
    <div className='card'>
        <div><img src="https://static.vecteezy.com/system/resources/thumbnails/055/621/001/small/closeup-portrait-of-a-young-woman-with-freckles-and-snow-on-her-face-surrounded-by-pine-branches-photo.jpg" alt="Doctor" />
        </div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>view details</button>

    </div>
  )
}

export default Doctorcard