import { usePathname } from 'next/navigation'
import React from 'react'
"use client"

function navbar() {
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
            <div className='w-full h-20 bg-white '>
                {navlinks.map((items) => (
                    <link className={`${pathname===items.href? "text-blue-400":""}`}key={items.href} href={items.href}>
                        {items.title}
                    </link>
                ))}
            </div>
        </>
    )
}

export default navbar