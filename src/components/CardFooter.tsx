import React from 'react';
import {CardType} from "../model/CardType";

interface CardFooterProps {
    isSelected: boolean,
    isDisabled: boolean,
    card: CardType
    handleSelect: () => void
}

const CardFooter = ({isSelected, isDisabled, card, handleSelect} : CardFooterProps) => {

    const footerText = () => {
        if (isSelected) {
            return <div className="card-footer">
                {card.description}
            </div>
        }

        if (isDisabled) {
           return <div className="card-footer__disabled">
                Печалька, с {card.fillingType} закончился.
            </div>
        }

        return  <div className="card-footer">
            Чего сидишь? Порадуй котэ, <span onClick={handleSelect}>купи</span>.
        </div>

    }



    return (
        <div>
            {footerText()}
        </div>
    );
};

export default CardFooter;