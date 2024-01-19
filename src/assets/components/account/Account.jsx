const Account = ({obj, setObj, account, setAccount}) => {
    console.log(typeof account);
    
    
    const depositFunc = () => {
        let accountNum = Number(account)
        let entryNum = Number(obj.entry)
        let addObj = accountNum + entryNum
        setAccount(addObj)
    }

    const payOutFunc = () => {
        let accountNum = Number(account)
        let entryNum = Number(obj.entry)
        let addObj = accountNum - entryNum

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