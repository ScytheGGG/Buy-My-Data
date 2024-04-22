import React from "react";

export default function BPage() {
        const MainpageStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="B-Mainpage" style={MainpageStyle}>
                        <div className="B-Mainpage--introduction">
                                <p className="B-Mainpage--title">Empower Your Data: Sell Smarter, Earn Securely</p>
                                <div className="B-Mainpage--description">
                                        <p className="B-Mainpage--description-1">
                                        Empowering individuals to take control of their digital footprint, 
                                        Buy My Data is a forward-thinking platform bridging technology solutions with user empowerment. </p>
                                        <p className="B-Mainpage--description-2">
                                        Our mission is to redefine data ownership, foster informed decision-making, 
                                        and shape a sustainable digital future.</p>
                                </div>
                                <a href="/signin" className="B-Mainpage--login B-Mainpage--text">Get Started</a>
                        </div>
                        <img src="./photos/Artwork-1.1.png" alt="Artwork 1" className="B-Mainpage--artwork_1" width="45%"></img>
                </nav>
        )
} 