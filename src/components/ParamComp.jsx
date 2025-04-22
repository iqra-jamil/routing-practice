import React from 'react'
import { useParams } from 'react-router-dom'
//useParams hook
const ParamComp = () => {
    const {id}=useParams();
  return (
    <div>
      <h1>Parameter : {id}</h1>
    </div>
  )
}

export default ParamComp
