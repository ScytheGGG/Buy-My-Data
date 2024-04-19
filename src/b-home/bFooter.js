import React  from "react";

export default function B_Footer() {
        const headerStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
                <nav className="Footer" style={headerStyle}>
                        <p className="Footer--text">© 2024 <a className="Footer--link" href="https://scytheggg.github.io/">Karl Tammehoid</a> All rights reserved.</p>
                </nav>
        )
}  