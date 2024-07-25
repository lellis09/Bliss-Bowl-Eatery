import React from "react";

const Menu = () => {
    return (
        <nav className="flex justify-center pr-8 pb-8">
            <div className="text-paleyellow">Logo</div>
            <ul className="flex gap-x-4 text-paleyellow">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Menu