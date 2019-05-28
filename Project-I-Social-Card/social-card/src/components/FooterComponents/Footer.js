import React, { useState } from 'react';
import "./Footer.css";

function Footer() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [isRetweet, setRetweet] = useState(false);
    const [countRetweet, setRetweetCount] = useState(0);

    const incrementHeart = () => {
        setRed(!isRed);
        isRed ? setCount(count - 1) : setCount(count + 1);
    }

    const incrementRetweet = () => {
        setRetweet(!isRetweet);
        isRetweet ? setRetweetCount(countRetweet - 1) : setRetweetCount(countRetweet + 1);
    }
    return (
        <footer className="footerContent">
            <img className="speak symbol" src="https://i.imgur.com/0mNf9cZ.png" alt='A grey symbol of a speak quote on a grey background.'/>
            <img onClick={incrementRetweet} className="retweet symbol" src="https://i.imgur.com/ZCpNj9a.png" alt='A grey symbol of two arrows bennt into a circle on a grey background.'/>
            <span className="retweetCounter">{countRetweet}</span>
            <img onClick={incrementHeart} className={isRed ? "heart filled symbol" : "heart symbol"} src="https://i.imgur.com/WPpIRFI.png" alt='A grey symbol of a heart on a grey background.'/>
            <span className="heartCounter">{count}</span>
            <img className="mail symbol" src="https://i.imgur.com/dCvbcVz.png" alt='A grey symbol of a post mail on a grey background.'/>
        </footer>
    );
}

export default Footer;