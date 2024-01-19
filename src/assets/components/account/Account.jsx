// const Account = ({obj, setObj}) => {

//     const depositFunc = () => {
        
//         let accountNum = Number(obj.account)
//         console.log(accountNum);
//         let entryNum = Number(obj.entry)
//         console.log(entryNum);
//         let addObj = {...obj, account: accountNum + entryNum, entry: ""}
//         console.log(typeof addObj);
//         setObj(addObj)
        
//     }

//     const payOutFunc = () => {
//         let accountNum = Number(obj.account)
//         let entryNum = Number(obj.entry)
//         let addObj = {...obj, account: accountNum - entryNum, entry: ""}
//         setObj(addObj)
//         if (addObj < 0) {
//             window.alert("Du kannst nicht mehr abheben, als du besitzt")
//             addObj = accountNum
//         } 
//         setObj(addObj)
//     }


//     return (
//         <>
//             <p>{obj.account} €</p>
//             <div>
//                 <input 
//                 type="number" 
//                 id = "input"
//                 placeholder="Betrag in €"
//                 value = {obj.entry}
//                 onChange={(event) => setObj({...obj, entry: event.target.value})}
//                 />
//                 <button onClick={depositFunc}>Einzahlen</button>
//                 <button onClick={payOutFunc}>Auszahlen</button>
//             </div>

//         </>
//     );
// }

// export default Account;



const Account = ({obj, setObj, account, setAccount}) => {

    const depositFunc = () => {
        let accountNum = Number(account)
        let entryNum = Number(obj.entry)
        let addObj = accountNum + entryNum
        obj.entry = ""
        setAccount(addObj)
    }

    const payOutFunc = () => {
        let accountNum = Number(account)
        let entryNum = Number(obj.entry)
        let addObj = accountNum - entryNum
        obj.entry = ""
        
        if (addObj < 0) {
            window.alert("Du kannst nicht mehr abheben, als du besitzt")
            addObj = accountNum
        } 
        setAccount(addObj)
    }

    return (
        <>
            <p>{account} €</p>
            <div>
                <input 
                type="number" 
                placeholder="Betrag in €"
                value = {obj.entry}
                onChange={(event) => setObj({...obj, entry: event.target.value})}
                />
                <button onClick={depositFunc}>Einzahlen</button>
                <button onClick={payOutFunc}>Auszahlen</button>
            </div>

        </>
    );
}

export default Account;