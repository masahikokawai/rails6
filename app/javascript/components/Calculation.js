import React, { useEffect, useState } from "react"

// useEffect
// ライフサイクルの代替
const Calculation = props => {
  const [state, setState] = useState(props)
  const reset = () => setState(props)
  const {name, price} = state

  // jsx のレンダリングの後に呼ばれてる
  // componentDidMount, componentDidUpdate に似てる
  // dom初回描画される時、dom都度変更された時
  useEffect(() => {
    console.log('useEffect')
  })

  // ②初回レンダリングに限定したい時
  useEffect(() => {
    console.log('useEffect-2')
  }, [])

  // ③name/price が変更された時に限定したい時
  // callback
  useEffect(() => {
    console.log('useEffect-3')
  }, [name])

  const renderPeriod = () => {
    console.log('renderPeriod')
    return 'maru'
  }

  return (
    <>
      <p>現在の{name}は、{price}円です3{renderPeriod()}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

Calculation.defaultProps = {
  name: '',
  price: 1000
}

export default Calculation
