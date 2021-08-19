//  localhost:3000/news/

import React from 'react'
import Link from 'next/Link'

function news() {
    return (
        <>
            <h1>News page</h1>   
            <ul>
                <li><Link href="/news/newsDetails">newDetails</Link></li>
            </ul>
        </>
    )
}

export default news
