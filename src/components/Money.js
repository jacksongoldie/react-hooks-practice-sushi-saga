import { useState } from 'react';

function Money({ money, setMoney }){
    
    const [addedMoney, setAddedMoney] = useState('')

    function handleMoneyChange(e){
        setAddedMoney(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setMoney((currentAmount) => currentAmount + parseInt(addedMoney))
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Add money to your account!
                <input type="text" placeholder='enter $$' value={addedMoney} onChange={handleMoneyChange}></input>
            </label>
                <input type="submit" value="submit" />
        </form>
    )
}

export default Money;