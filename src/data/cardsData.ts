import {CardType} from "../model/CardType";


export const cardsData: Array<CardType> = [
    {
        id: 1,
        fillingType: "фуа-гра",
        numberOfServings: 10,
        numberOfGifts: 1,
        weight: 0.5,
        countPackage: 0,
        description: "Печень утки разварная с артишоками."
    },
    {
        id: 2,
        fillingType: "рыбой",
        numberOfServings: 40,
        numberOfGifts: 2,
        weight: 2,
        countPackage: 2,
        description: "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
        id: 3,
        fillingType: "курой",
        numberOfServings: 100,
        numberOfGifts: 5,
        weight: 5,
        countPackage: 2,
        description: "Филе из цыплят с трюфелями в бульоне."
    },
]