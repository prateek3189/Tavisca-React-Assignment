import React from "react";

class Header extends React.Component {
    constructor() {
        super();
        this.state =  {
        };

    }

    render() {
        return (
            <header className="logo-box">
                <img src="images/logo.png"/>
            </header>
        );
    }
}

module.exports = Header;
