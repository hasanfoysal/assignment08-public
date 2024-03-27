/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import BookType from "../BookType/BookType";

const BooksTypes = () => {
    // eslint-disable-next-line no-unused-vars
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('BookTypes.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    }, [])

    return (
     <>
        <div className="my-12">
            <h3 className="text-5xl text-center">Books</h3>
        </div>
        <div className=" max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 lg:mb-20">
            {
                books.map(book => <BookType book={book}></BookType>)
            }
        </div>
     </>
    );
};

export default BooksTypes;