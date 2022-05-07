import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/thelastdanceq/react-movie">Repo</a>
                </div>
            </div>
        </footer>
    )
}
