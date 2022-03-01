import React from 'react';
import './Header.css';

import logo from '../../img/logo.png';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';
import HeaderPages from '../HeaderPages/HeaderPages';

function Header(props) {

    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Finance logo" />
                <HeaderPages currentPage={props.currentPage} changePage={props.changePage} />
                <div className="base-currency" onClick={() => {props.setModalAction(props.actionModal); props.showModal();}} >
                    <span>Валюта по умолчанью:</span>
                    <CurrencyModalDiv abbreviation={props.abbreviation} name={props.name} />
                </div>
            </div>
        </header>
    );
}

export default Header;