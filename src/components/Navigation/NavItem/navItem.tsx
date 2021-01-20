import React from "react"

interface IProps {
    readonly link: ILink;
}

interface ILink {
    text: string;
    url: string;
}

const navItemClass: React.CSSProperties = {
    width: 100,
    order: 1,
    padding: 50
}

const NavItem: React.FC<IProps> = (props) => {
    return (
        <React.Fragment>
            <span><a style={navItemClass} href={props.link.url}>{props.link.text}</a></span>
        </React.Fragment>
    )
}

export default NavItem