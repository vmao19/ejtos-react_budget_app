import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const submitEvent = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Currency (
            <select className="currency-select" id="inputGroupSelect02" value={currency} placeholder={'Currency (' + currency + ')'} onChange={(event) => submitEvent(event.target.value)}>
                    <option value="$" name="$">$ Dollar</option>
                    <option value="£" name="£">£ Pound</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Rupee</option>
                </select>
            )
            </span>
        </div>
    );
};
export default CurrencyDropdown;