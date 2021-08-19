//  localhost:3000/news/?dynamic
import React from 'react'
import {useRouter} from 'next/router'


function newsDetails() {

    const router=useRouter();

    const newssId=router.query;
    
    console.log(newssId.dynamic);


    return (
        <>
            <h1>you entered {newssId.dynamic}</h1>
            <h1>News details  page</h1>   
        </>
    )
}

export default newsDetails; 
