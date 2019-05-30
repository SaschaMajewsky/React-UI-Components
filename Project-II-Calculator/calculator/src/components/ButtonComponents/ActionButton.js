import React from 'react';
import './Button.css';

//props is the same as {propname1, propname2}
const ActionButton = ({buttonStyle, text}) => {
    return <button className={buttonStyle}>{text}</button>
}

export default ActionButton;