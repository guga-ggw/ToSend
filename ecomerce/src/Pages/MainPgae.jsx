import React, { useEffect } from 'react'
import { createcarCard, getCarInfo,  } from '../Store/Card/card.thunks'
import {useDispatch} from 'react-redux'
import { consol } from '../Store/Card/CarSlice'



function MainPgae() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCarInfo())
  },[])

  const createsome = () => {
    const car = {
      title : 'tesla',
      completed : false
    }
    dispatch(createcarCard([car]))
  }
  
  return (
    <div>
      <button onClick={() => createsome()}>Click</button>

    </div>
  )
}

export default MainPgae