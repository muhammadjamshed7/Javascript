import React, { useState } from 'react'

const App = () => {
  const [value,setValue]=useState(1)
  const [mulitiplyvalue,setmulitiplyvalue]=useState(1)
  const mul=()=>{
    setmulitiplyvalue(value*5)
    setValue(value+1)

  }
  return (
    <>
    <h1> Main Value:{value} </h1>
    <button onClick={mul}>Click to mulitply by 5</button>
    <h2>Mulitplied Value:{mulitiplyvalue} </h2>
    </>
  )
}
export defaultimport React, { useState } from 'react'

const App = () => {
  const [value,setValue]=useState(1)
  const [mulitiplyvalue,setmulitiplyvalue]=useState(1)
  const mul=()=>{
    setmulitiplyvalue(value*5)
    setValue(value+1)

  return (
    <>
    <h1> Main Value:{value} </h1>
    <button onClick={mul}>Click to mulitply by 5</button>
    <h2>Mulitplied Value:{mulitiplyvalue} </h2>
    </>
  )
}
export defaultimport React, { useState } from 'react'

const App = () => {
  const [value,setValue]=useState(1)
  const [mulitiplyvalue,setmulitiplyvalue]=useState(1)
  const mul=()=>{
    setmulitiplyvalue(value*5)
    setValue(value+1
  }
  return (
    <>
    <> Main 