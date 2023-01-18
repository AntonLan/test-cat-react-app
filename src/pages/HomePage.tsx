import React from 'react';
import Card from "../components/Card";
import {cardsData} from "../data/cardsData";

const HomePage = () => {

    return (
        <div className="container">
            <div className="title">Ты сегодня покормил кота?</div>
            <div className="card-container">
                {cardsData.map(card => {
                    return (
                        <Card key={card.id} card={card}/>
                    )
                })}
            </div>
        </div>
    );
};

export default HomePage;