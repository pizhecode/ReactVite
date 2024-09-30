import { useState } from "react"
// 泛型参数
type User = {
    name:string
    age:number
}

function App(){
    const [user,setUser] =useState<User>({
        name:'Jack',
        age:18
    })
    return <>this is user{user.name}</>
}

export default User