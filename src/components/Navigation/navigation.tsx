import React from "react";
import NavItem from "./NavItem/navItem";

const links = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Blog",
        url: "./blog"
    },
    {
        text: "Contact",
        url: "./contact"
    }
]

const navClass: React.CSSProperties = {
    width: '100%',
    height: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 50
}

const Navigation = () => {
    return (
        <div style={navClass}>
            {links.map(link => (
                <NavItem link={link} />
            ))}
        </div>
    )
}

export default Navigation;