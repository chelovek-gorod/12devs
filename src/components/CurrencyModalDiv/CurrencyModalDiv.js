import React from 'react';
import './CurrencyModalDiv.css';

function Currency(props) {
  return (
    <div className="currency-div" onClick={ () => {props.clickAction(props.abbreviation); props.hideModal()} }>
        <div className="currency-abbreviation">{ props.abbreviation }</div><div className="currency-name">{ props.name }</div>
    </div>
  );
}

export default Currency;