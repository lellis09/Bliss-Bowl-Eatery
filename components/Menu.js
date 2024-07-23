import React from "react";

const Menu = () => {
    return (
        <nav className="flex justify-between pr-8">
            <div>Logo</div>
            <ul className="flex gap-x-4">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Menu