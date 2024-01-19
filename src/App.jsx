
import { useState } from 'react'
import './App.css'
import Account from './assets/components/account/Account'

function App() {
  
  const [obj, setObj] = useState({
    entry: 0
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
