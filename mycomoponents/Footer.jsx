import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        justifyContent: "center",
        
    }
    return (
        <footer className="bg-dark text-light py-1 text-center" style={footerStyle}>
            Crazzy Devs Copyright &copy; {new Date().getFullYear()}
        </footer>
    )
}