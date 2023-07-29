
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [localBudget, setLocalBudget] = useState(budget);

    const submitEvent = (newBudget) => {
        setLocalBudget(newBudget);
        if (newBudget > 20000) {
            alert("The budget value cannot exceed £20,000.");
            return;
        }
        if (newBudget < totalExpenses) {
            alert("The budget value cannot be lower than spending.");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                    required='required'
                    type='number'
                    id='budget'
                    step={10}
                    value={localBudget}
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={(event) => submitEvent(event.target.value)}>
                </input>

            </span>
        </div>
    );
};
export default Budget;