import React from 'react';
import './ModalCurrenciesList.css';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';

function ModalCurrenciesList(props) {

    function getKey() {
        let key = 0;
        return function() { return key++; }
    }
    let newKey = getKey();

    // props.clickAction(props.abbreviation); props.hideModal;

    return (
        <div className='modal-shell'>
            <div className='modal'>
                <div className='modal-title'>Выберите валюту</div>
                <div className='modal-entry'>
                    { props.currenciesArr.map(currency => <CurrencyModalDiv key={newKey()} abbreviation={currency.abbreviation} name={currency.name} clickAction={props.clickAction} hideModal={props.hideModal} />) }
                </div>
            </div>
        </div>
    );
}

export default ModalCurrenciesList;