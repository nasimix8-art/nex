"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

import Link from "next/link"


function Navbar() {
    const pathname=usePathname()
    const navlinks = [{
        href: "/",
        title: "خانه"
    },
    {
        href: "/stor",
        title: "محصولات"
    },
    {
        href: "/about us",
        title: "درباره ما"
    }

    ]
    return (
        <>
            <div className='w-full h-20 bg-white flex items-center gap-5 justify-end p-5'>
                {navlinks.map((items) => (
                    <Link className={`${pathname===items.href? "text-blue-400":"text-black"}`}key={items.href} href={items.href}>
                        {items.title}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Navbar