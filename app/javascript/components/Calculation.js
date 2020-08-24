import React, { useState } from "react"

// useState
const Calculation = () => {
  // const output = useState(0)
  // console.log({output})
  // console.log(output)

  const [count, setCount] = useState(0)
  console.log({count})
  console.log({setCount})
  console.log(typeof setCount)

  // const increment = () => {}
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  // const divide3 = () => setCount(previousCount => {
  //   if (previousCount % 3 === 0) {
  //     return previousCount / 3
  //   } else {
  //     return previousCount
  //   }
  // })
  // const divide3 = () => setCount(previousCount => {
  //   return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  // })
  const divide3 = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )

  return (
    // 1
    // <div>
    //   <div>
    //     hoge!!<br />
    //     count: {count}
    //   </div>
    //   <button>+1</button>
    // </div>

    // 2
    // <React.Fragment>
    //   <div>
    //     hoge!!<br />
    //     count: {count}
    //   </div>
    //   <button>+1</button>
    // </React.Fragment>

    // 3
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default Calculation
