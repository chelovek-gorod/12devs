import React from 'react';
import './HeaderPages.css';

function HeaderPages(props) {

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <nav>
            <button
                className={ (props.currentPage === 'converter') ? "active" : "await" }
                onClick={ (props.currentPage !== 'converter')? () => props.changePage('converter') : handleClick } >
                Конвертар
            </button>
            <button
                className={ (props.currentPage === 'currencies')? "active" : "await" }
                onClick={ (props.currentPage !== 'currencies')? () => props.changePage('currencies') : handleClick } >
                Все курсы
            </button>
        </nav>
    );
}

export default HeaderPages;