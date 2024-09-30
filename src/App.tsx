//根据初始值自动推断
import { useState } from "react"

function App() {
  // `val` 会被自动推断为布尔类型
// `toggle` 方法调用时只能传入布尔类型
  const [value, toggle] = useState(false)
  const [list,setList] = useState([1,2,3])
  const changeValue = ()=>{
    toggle(true)
  }
  const changeList = ()=>{
    setList([4,5,6])
  }
  return (
    <>
     this is app{list}
    </>
  )
}

export default App
