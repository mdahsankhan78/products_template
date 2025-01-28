import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const links = [
    { label: 'Home', url: '/' },
    { label: 'Features', url: '/features' },
    { label: 'Blogs', url: '/blogs' },
    { label: 'FAQs', url: '/faqs' },
]

const NavLinks = ({ className, linksStyles, hr }) => {
    const location = useLocation()

    return (
        <>
            <ul className={`${className} gap-x-10`}>
                {links.map((link, i) => (
                    <li>
                        <Link to={link.url} className={`${location.pathname === link.url ? 'text-primary-foreground' : 'text-primary'} hover:text-primary-foreground ${linksStyles}`}>
                            {link.label}
                        </Link>
                        {hr && <hr className='mt-2' />}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavLinks