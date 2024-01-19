
import { useState } from 'react'
import './App.css'
import Account from './assets/components/account/Account'

// function App() {
  
//   const [obj, setObj] = useState({
//     entry: "",
//     account: ""
//   }) 

//   return (
//     <>
//       <h1>Banana Bank</h1>
//       <Account
//         obj = {obj}
//         setObj = {setObj}
//       />
//     </>
//   )
// }

// export default App


function App() {
  
  const [obj, setObj] = useState({
    entry: "",
  })

  const [account, setAccount] = useState(0)
  

  return (
    <>
      <h1>Banana Bank</h1>
      <Account
        obj = {obj}
        setObj = {setObj}
        account = {account}
        setAccount = {setAccount}
      />
    </>
  )
}

export default App

