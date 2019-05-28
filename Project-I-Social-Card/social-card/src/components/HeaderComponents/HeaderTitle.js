import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import moment from 'moment'

function HeaderTitle() {
    let today = moment().format("ll");
    return (
        <div className="header">
            <div className="header-title">
                <h2>Lambda School</h2>
                <a href={'https://www.lambdaschool.com/'}>@LambdaSchool</a>
                <p> {today.split(' ')[1].replace(',','') + " " + today.split(' ')[0]}</p>
            </div>
            <div className="header-content">
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderTitle;
