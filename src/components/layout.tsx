import React from 'react';

import "fontsource-roboto-mono"
import "./layout.css"
import Navigation from "./Navigation/navigation"


// styles

export default function Layout({ children }) {
    // const links = [
    //     {
    //         text: "home",
    //         url: "./home"
    //     }
    // ]

    return (
        <React.Fragment>
            <Navigation></Navigation>

            {children}
        </React.Fragment>
    )
}