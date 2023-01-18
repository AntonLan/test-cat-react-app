import React, {useState} from 'react';
import {CardType} from "../model/CardType";
import CatPhoto from "../assets/cat.svg";

interface CardContentProps {
    handleSelect: () => void
    cardSelectColor: () => string
    isSelect: boolean
    card: CardType
}

const CardContent = ({handleSelect, cardSelectColor, isSelect, card}: CardContentProps) => {
    const [isHover, setIsHover] = useState(false)

    console.log(isSelect)

    const hoverTextSelect = (event: any) => {
        if (isSelect) {
            setIsHover(true)
        } else {
            setIsHover(false)
        }

        console.log(event.target.className)
    }


    return (
        <div onClick={handleSelect}
             onMouseEnter={(event) => hoverTextSelect(event)}
             onMouseLeave={() => setIsHover(false)}
             className={cardSelectColor()}>
            <div className="card">
                {isHover ?
                    <div className="card__header-hover">Котэ не одобряет?</div>
                    :
                    <div className="card__header">Сказочное заморское яство</div>
                }
                <div className="card__title">Нямушка <span>с {card.fillingType}</span></div>
                <div className="card__content-text">
                    <div>
                        <span>{card.numberOfServings}</span>порций</div>
                    <div>
                        <span>{card.numberOfGifts}</span>мышь в подарок
                    </div>
                    {card.weight >= 5 && <div>заказчик доволен</div>}
                </div>

                <img className="card__content-img" src={CatPhoto} alt="cat"/>
                <div className="card__content-oval">
                    <div className="card__content-oval-text">{card.weight}</div>
                    <p>кг</p>
                </div>
            </div>
        </div>
    );
};

export default CardContent;