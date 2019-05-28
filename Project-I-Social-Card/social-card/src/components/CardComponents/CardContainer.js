import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
    function redirect() {
        window.open("https://reactjs.org/", '_blank');
    }

    return (
        <div className="cardContainer" onClick={redirect}>
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;
