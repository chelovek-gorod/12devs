import React from 'react';
import './Currency.css';

function Currency(props) {
  return (
    //{ abbreviation : 'USD', name : 'Доллар США', scale : 1, rate : 2.75 }
    <div className="currency-div" onClick={() => props.addToFavorite(props.abbreviation)}>
        <span className="abbreviation">{props.abbreviation}</span>
        <span>{props.name}</span>
        <span className="scale">{props.scale}</span>
        <span>{props.rate}</span>
    </div>
  );
}

export default Currency;