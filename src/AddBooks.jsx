import React, { useState, useContext } from 'react'
import { bookContext } from './bookContext'


const AddBooks = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [books, setBooks] = useContext(bookContext)

    const updateName = e => {
        setName(e.target.value)
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }
    const addBook = e => {
        e.preventDefault();
        setBooks(prevBooks => [...prevBooks, { name, price }])
    }

    return (
        <div>
            <form onSubmit={addBook} className="form-group">
                <input
                    className="form-control mb-3"
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={updateName} />
                <input
                    className="form-control mb-2"
                    type="text"
                    name="price"
                    value={price}
                    required
                    onChange={updatePrice} />
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form> <hr />
        </div>
    )
}

export default AddBooks
