import React from "react";
import styles from "./navigation.module.css";
import { Link } from "gatsby";

const links = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Blog",
        url: "/blog"
    },
    {
        text: "Contact",
        url: "/contact"
    }
]

const Navigation = () => {
    return (
        <div className={styles.nav}>
            {links.map(link => (
                <Link to={link.url} className={styles.navItem} activeClassName={styles.active}>
                    {link.text}
                </Link>
            ))}
        </div>
    )
}

export default Navigation;