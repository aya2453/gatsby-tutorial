import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerSyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={headerSyles.header}>
<h1>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul className={headerSyles.navList}>
                    <li>
                        <Link className={headerSyles.navItem} activeClassName={headerSyles.activeNavItem} to="/">Home</Link>   
                    </li>
                    <li>
                        <Link className={headerSyles.navItem} activeClassName={headerSyles.activeNavItem} to="/about">About</Link>   
                    </li>
                    <li>
                        <Link className={headerSyles.navItem} activeClassName={headerSyles.activeNavItem} to="/blog">Blog</Link>   
                    </li>
                    <li>
                        <Link className={headerSyles.navItem} activeClassName={headerSyles.activeNavItem} to="/contact">Contact</Link>   
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header