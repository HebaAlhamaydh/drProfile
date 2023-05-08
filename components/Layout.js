import React from 'react'
import Navbar from './Navbar'

export default function Layout({children,className}){
    return (
        <div className={`layout ${className}`}>
        <Navbar/>
        {children}
        </div>
    )
}