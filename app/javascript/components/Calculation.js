import React, { useState } from "react"

const Calculation = () => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      // <button onClick={() => setPrice(props.price)}>Reset</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}

Fuga.defaultProps = {
  name: '',
  price: 1000
}

export default Calculation
