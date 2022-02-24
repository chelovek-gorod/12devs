'use strict';

/*
получение официального курса белорусского рубля по отношению к 1 Доллару США на сегодня:
https://www.nbrb.by/api/exrates/rates/431 – по внутреннему коду валюты
https://www.nbrb.by/api/exrates/rates/840?parammode=1 – по цифровому коду валюты (ИСО 4217)
https://www.nbrb.by/api/exrates/rates/USD?parammode=2 – по буквенному коду валюты (ИСО 4217)
получение официального курса белорусского рубля по отношению к 100 Российским рублям на 5 июля 2016 года: https://www.nbrb.by/api/exrates/rates/298?ondate=2016-7-5
*/

const URLs = {
    'currenciesList' : 'https://www.nbrb.by/api/exrates/currencies',
    'officialBYNCurrenciesToday' : 'https://www.nbrb.by/api/exrates/rates?periodicity=0',
    'officialBYNCurrenciesSetData' : 'https://www.nbrb.by/api/exrates/rates?ondate=2016-7-6&periodicity=0',
    'officialBYNCurrenciesSetUnrealData' : 'https://www.nbrb.by/api/exrates/rates?ondate=2022-7-6&periodicity=0',
};


fetch(URLs['officialBYNCurrenciesSetUnrealData'])
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });