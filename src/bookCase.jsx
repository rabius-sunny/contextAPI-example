import './App.css'

const BookCase = ({name, price}) => {
    return (
        <div className="case">
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    )
}

export default BookCase
