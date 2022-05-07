import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo center">Shop</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="https://github.com/thelastdanceq/react-movie">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}
