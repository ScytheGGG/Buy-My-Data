import React from "react";

export default function Header() {
        const headerStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="Navbar" style={headerStyle}>
                        <img src="./photos/BuyMyData.png" alt="Buy My Data logo" className="Navbar--logo" width="8%"></img>
                        <div className="Navbar--texts">
                                <p className="Navbar--text">Home</p>
                                <p className="Navbar--text">About</p> 
                                <a className="Navbar--text Navbar--login">Login</a>
                        </div>
                </nav>
        )
} 