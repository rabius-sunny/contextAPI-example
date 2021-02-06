import React, { useContext } from 'react';
import './App.css'
import { bookContext } from "./bookContext";

function Nav() {
    const [books, setBooks] = useContext(bookContext)
    return (
        <div className="nav">
            <h2>Book Store</h2>
            <p>Total Books: {books.length} </p>
        </div>
    )
}

export default Nav
