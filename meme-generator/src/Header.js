import React from "react";

function Header() {
    return (
        <header className="header">
            <img
                className="pepe"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiL1sh6uC0L4XzBlIQ65QQLWBRWWcHqLw_KHKtfFZxEeMhT84WNLeFCWk4UVc-X3ry9M&usqp=CAU"
                alt="Pepe"
            />
            <h1 className="header-title">Meme Generator</h1>
        </header>
    )
}

export default Header