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
                Конвертер
            </button>
            <button
                className={ (props.currentPage === 'rates')? "active" : "await" }
                onClick={ (props.currentPage !== 'rates')? () => props.changePage('rates') : handleClick } >
                Все курсы
            </button>
        </nav>
    );
}

export default HeaderPages;