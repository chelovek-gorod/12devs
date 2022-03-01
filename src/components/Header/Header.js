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
            </div>
        </header>
    );
}

export default Header;