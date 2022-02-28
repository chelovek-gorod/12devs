export function setBase(base) {
    return {
       type: 'SET_BASE', base
    }
}

export function addToFavorite(favoriteAdd) {
    return {
       type: 'ADD_TO_FAVORITE', favoriteAdd
    }
}

export function removeFromFavorite(favoriteRemove) {
    return {
       type: 'REMOVE_FROM_FAVORITE', favoriteRemove
    }
}

export function loadCurrencies(currenciesArr) {
    return {
       type: 'LOAD_CURRENCIES', currenciesArr
    }
}