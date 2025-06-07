import React from 'react' 
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Header() {
    return(
        <header className="header">
            <Link to="/" className="site-title">
                Site Name
            </Link>
            <nav>
                <ul>
                    <CustomLink to="/profile"> Profile </CustomLink>
                    <CustomLink to="/experience"> Experience </CustomLink>
                </ul>
            </nav>
        </header>
    );
}


function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to); 
    const isActive = useMatch({ path: resolvedPath.pathname, end: true}); 

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}