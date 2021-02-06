import React, { useContext } from 'react'
import BookCase from './bookCase';
import { bookContext } from "./bookContext";

const BookList = () => {
    const [books, setBooks] = useContext(bookContext)

    return (
        <div>
            {books.map(book => ( // We destructured this book above and it comes from our created context. 
                <BookCase name={book.name} price={book.price} key={book.id} />
            ))}
        </div>
    )
}

export default BookList