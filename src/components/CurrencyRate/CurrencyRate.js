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
        <tr className='rate-line'>
            <td className='left'><img src={favoriteImg}
                    alt="Избранная валюта"
                    title={(props.favorite) ? 'Удалить из избранных' : 'Добавить в избранные'}
                    className={(props.favorite) ? 'favorite' : 'unfavorite'}
                    onClick={handleClick}
            /></td>
            <td className='align-right'>{props.currency.scale} <span>{props.currency.abbreviation}</span></td>
            <td className='rate-name'>{props.currency.name} </td>
            <td> = </td>
            <td className='right'>{currentRate()} <span>{props.abbreviation}</span></td>
        </tr>
    );
}

export default CurrencyRate;