export function setBase(base) {
    return {
       type: 'SET_BASE', base
    }
}

export function setAbbreviationConvertLeft(data) {
    return {
       type: 'SET_ABBREVIATION_CONVERT_LEFT', data
    }
}

export function setAbbreviationConvertRight(data) {
    return {
       type: 'SET_ABBREVIATION_CONVERT_RIGHT', data
    }
}

export function setConvertValues(data) {
    return {
       type: 'SET_CONVERT_VALUES', data
    }
}

export function addToFavorite(currency) {
    return {
       type: 'ADD_TO_FAVORITE', currency
    }
}

export function removeFromFavorite(currency) {
    return {
       type: 'REMOVE_FROM_FAVORITE', currency
    }
}

export function loadCurrencies(currenciesArr) {
    return {
       type: 'LOAD_CURRENCIES', currenciesArr
    }
}

export function showModal() {
    return {
       type: 'SHOW_MODAL'
    }
}

export function hideModal() {
    return {
       type: 'HIDE_MODAL'
    }
}

export function setModalAction(modalActionType) {
    return {
       type: 'SET_MODAL_ACTION', modalActionType
    }
}

export function changePage(pageName) {
    return {
       type: 'CHANGE_PAGE', pageName
    }
}