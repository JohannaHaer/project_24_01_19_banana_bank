import "./account.css"

const Account = ({obj, setObj}) => {

    const depositFunc = () => {
        
        let accountNum = Number(obj.account)
        console.log(accountNum);
        let entryNum = Number(obj.entry)
        console.log(entryNum);
        let addObj = {...obj, account: accountNum + entryNum, entry: ""}
        console.log(typeof addObj);
        setObj(addObj)
        
    }

    const payOutFunc = () => {
        let accountNum = Number(obj.account)
        let entryNum = Number(obj.entry)
        let addObj = {...obj, account: accountNum - entryNum, entry: ""}
        setObj(addObj)

        if (addObj.account < 0 && addObj.account > -1000) {
               window.alert(`Du bist in deinem Dispo mit ${addObj.account}€ von 1000€ Limit`)
        } else if (addObj.account < -1000) {
                    window.alert("Du kannst dein Limit von 1000€ nicht überschreiten!")
                    addObj.account = accountNum
        }
        setObj(addObj)
    }


    return (
        <>
            <p>{obj.account} €</p>
            <div className="input">
                <input 
                type="number" 
                id = "input"
                placeholder="Betrag in €"
                value = {obj.entry}
                onChange={(event) => setObj({...obj, entry: event.target.value})}
                />
                <div className="buttons">
                    <button onClick={depositFunc}>Einzahlen</button>
                    <button onClick={payOutFunc}>Auszahlen</button>
                </div>
            </div>

        </>
    );
}

export default Account;



// const Account = ({obj, setObj, account, setAccount}) => {

//     const depositFunc = () => {
//         let accountNum = Number(account)
//         let entryNum = Number(obj.entry)
//         let addObj = accountNum + entryNum
//         obj.entry = ""
//         setAccount(addObj)
//     }

//     const payOutFunc = () => {
//         let accountNum = Number(account)
//         let entryNum = Number(obj.entry)
//         let addObj = accountNum - entryNum
//         obj.entry = ""
        
//         if (addObj < 0 && addObj > -1000) {
//             window.alert(`Du bist in deinem Dispo mit ${addObj}€ von 1000€ Limit`)
//         } else if (addObj < -1000) {
//             window.alert("Du kannst dein Limit von 1000€ nicht überschreiten!")
//             addObj = accountNum
//         } 
//         setAccount(addObj)
//     }

//     return (
//         <>
//             <p>{account} €</p>
//             <div>
//                 <input 
//                 type="number" 
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