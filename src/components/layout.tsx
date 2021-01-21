import React from 'react';

import "./layout.css"
import Navigation from "./Navigation/navigation"


// styles
const Layout: React.FC = ({ children }) => {
return (
        <React.Fragment>
            <Navigation></Navigation>
            
            {children}
        </React.Fragment>
    )
}

export default Layout