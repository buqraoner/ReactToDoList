import React from 'react'
import Form from './Form'
import Content from './Content'
import Footer from './Footer'


function Header() {
    return (
        <header className="header">
            <h1>todos</h1>
            <Form />
        </header >
    )
}

export default Header