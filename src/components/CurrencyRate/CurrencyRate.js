import React from 'react';
import './CurrencyRate.css';

import favoriteImg from '../../img/favorite.png';

function CurrencyRate(props) {

    function handleClick() {
        props.clickAction(props.currency.abbreviation);
        console.log(props.clickAction);
    }

    function currentRate() {
        return ( (props.currency.rate / props.rate) * props.scale ).toFixed(2);
    }

    return (
        <div className='rate-line'>
            <img src={favoriteImg} alt="Избранная валюта"
                title={(props.favorite) ? 'Удалить из избранных' : 'Добавить в избранные'}
                className={(props.favorite) ? 'favorite' : 'unfavorite'} onClick={handleClick} />
            {props.currency.scale} <span>{props.currency.abbreviation}</span> {props.currency.name} =
            {currentRate()} <span>{props.abbreviation}</span>
        </div>
    );
}

export default CurrencyRate;