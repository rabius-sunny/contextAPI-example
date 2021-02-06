import React, { useState, createContext } from 'react'

export const bookContext = createContext()

export const BookProvider = props => {
    const [books, setBooks] = useState([
        {
            name: 'Durus Al Lugah',
            price: '90',
            id: 23231
        },
        {
            name: 'Fath Al Baree',
            price: '400',
            id: 23453
        },
        {
            name: 'Sharh Bayquniyyah',
            price: '90',
            id: 23769
        }
    ])
    return (
        <bookContext.Provider value={[books, setBooks]}>
            {props.children}
        </bookContext.Provider>
        // We ensure that all the components who will call our created context will be wrapped by the Provider.
    )
}
