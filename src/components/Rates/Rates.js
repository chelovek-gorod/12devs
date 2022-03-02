import React from 'react';
import './Rates.css';

import CurrencyRate from '../CurrencyRate/CurrencyRate'

function Rates(props) {

    let favoriteArr = [];
    let othersArr = [];

    let baseScale;
    let baseRate;
    for (let objCurr of props.currenciesArr) {
        if (objCurr.abbreviation === props.abbreviation) {
            baseScale = objCurr.scale;
            baseRate = objCurr.rate;
            break;
        }
    }

    props.currenciesArr.forEach(currency => {
        if (currency.abbreviation !== props.abbreviation) {
            if (~props.favoritesArr.indexOf(currency.abbreviation)) favoriteArr.push(currency);
            else othersArr.push(currency);
        }
    });

    function getKey() {
        let key = 0;
        return function() { return key++; }
    }
    let newKey = getKey();

    return (
        <div>
            <div className="title">Курсы валют</div>
            <div className="subtitle">для <span>{props.abbreviation}</span> {props.name}</div>
            <div className="rates-container">
                { favoriteArr.map(currency => <CurrencyRate key={newKey()} favorite={true} currency={currency} abbreviation={props.abbreviation} scale={baseScale} rate={baseRate} clickAction={props.removeFromFavorite} />) }
                { othersArr.map(currency => <CurrencyRate key={newKey()} favorite={false} currency={currency} abbreviation={props.abbreviation} scale={baseScale} rate={baseRate} clickAction={props.addToFavorite} />) }
            </div>
        </div>
    );
}

export default Rates;