import React, {useEffect, useState} from 'react';
import CatPhoto from '../assets/cat.svg'
import {CardType} from "../model/CardType";
import CardFooter from "./CardFooter";
import CardContent from "./CardContent";

interface CardProps {
    card: CardType
}


const Card = ({card}: CardProps) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(()=> {
        checkStatus()
    })


    const handleSelect = () => {
        if (isDisabled) {
            return
        }
        setIsSelected(!isSelected)
    }

    const cardSelectColor = () => {
        if (isDisabled) {
            return "card-clip__disabled"
        }
        if (isSelected) {
            return "card-clip__active"
        }
        return "card-clip"
    }

    const checkStatus = () => {
        if (card.countPackage === 0) {
            setIsDisabled(true)
        }
    }

    return (
        <div className="card-wrap">
            <CardContent
                handleSelect={handleSelect}
                cardSelectColor={cardSelectColor}
                isSelect={isSelected}
                card={card}
            />
            <CardFooter
                handleSelect={handleSelect}
                isSelected={isSelected}
                isDisabled={isDisabled}
                card={card}/>
        </div>
    )
};

export default Card;