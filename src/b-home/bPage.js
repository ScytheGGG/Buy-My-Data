import React from "react";

export default function B_Page() {
        const MainpageStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="Mainpage" style={MainpageStyle}>
                        <div className="Mainpage--introduction">
                                <p className="Mainpage--title">Empower Your Data: Sell Smarter, Earn Securely</p>
                                <div className="Mainpage--description">
                                        <p className="Mainpage--description-1">
                                        Empowering individuals to take control of their digital footprint, 
                                        Buy My Data is a forward-thinking platform bridging technology solutions with user empowerment. </p>
                                        <p className="Mainpage--description-2">
                                        Our mission is to redefine data ownership, foster informed decision-making, 
                                        and shape a sustainable digital future.</p>
                                </div>
                        </div>
                        <img src="./photos/Artwork-1.1.png" alt="Artwork 1" className="Mainpage--artwork_1" width="45%"></img>
                </nav>
        )
} 