import React  from "react";

export default function BFooter() {
        const headerStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="B-Footer" style={headerStyle}>
                        <p className="B-Footer--text">© 2024 <a className="B-Footer--link" href="https://scytheggg.github.io/">Karl Tammehoid</a> All rights reserved.</p>
                </nav>
        )
}  