import React from 'react';
import './CurrencyModalDiv.css';

function Currency(props) {

    function handleClick() {
        if (props.clickAction) {
            props.clickAction(props.abbreviation);
            props.hideModal();
        }
    }

    return (
        <div className="currency-div" onClick={handleClick} >
            <div className="currency-abbreviation">{ props.abbreviation }</div>
            <div className="currency-name">{ props.name }</div>
        </div>
    );
}

export default Currency;