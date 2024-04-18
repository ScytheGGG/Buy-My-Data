import React from "react";

export default function Mainpage() {
        const MainpageStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="Mainpage" style={MainpageStyle}>
                        <div className="Mainpage--introduction">
                                <p className="Mainpage--title" width="20%">Control & decide what to do with your own data.</p>
                                <p className="Mainpage-- description"> Buy My data was made to take control, unlock rewards, and explore the new frontier of data ownership.
                                </p>
                        </div>
                </nav>
        )
} 