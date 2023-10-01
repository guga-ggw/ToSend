import React, { useRef, useState } from 'react'

function Form() {
    const [image, setimage] = useState()
    const ref = useRef()

  return (
    <div className='fill_form'>

        <input type="file" accept='image/*' ref={ref}/>
    </div>
  )
}

export default Form