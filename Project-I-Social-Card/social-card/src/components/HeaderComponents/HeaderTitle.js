import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";

function HeaderTitle() {
    return (
        <div className="header">
            <div className="header-title">
                <h2>Lambda School</h2>
                <a href={'https://www.lambdaschool.com/'}>@LambdaSchool</a>
                <p> • 26 Jan</p>
            </div>
            <div className="header-content">
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderTitle;
