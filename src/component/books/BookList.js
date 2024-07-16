import React, { useEffect, useState } from 'react';
import { getBooks } from '../../action/BookAction';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../../action/TransacationAction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker CSS
import { useAlert } from 'react-alert';


const BookList = () => {
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [dueDate, setDueDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const alert = useAlert();

    const dispatch = useDispatch();
    const { error, books, success } = useSelector((state) => state.books);

    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData ? userData._id : null;



    useEffect(() => {
        dispatch(getBooks())

    }, [dispatch]);



    const handleBorrow = (bookId) => {
        setSelectedBookId(bookId);
        setShowDatePicker(true);
        alert.success("Book Borrowed Done!")
    };

    const handleDateSelect = (date, bookName) => {
        console.log(bookName);
        setDueDate(date);
        dispatch(addTransaction(userId, selectedBookId, date));
        setShowDatePicker(false);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 className='text-white text-4xl flex justify-center items-center mt-10 my-10'>Book List</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10'>
                {books && books.map(book => (
                    <div
                        key={book._id}
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-md "
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-yellow-900 sm:text-xl">
                                    {book.title}
                                </h3>

                                <p className="mt-1 text-xs font-medium text-gray-600">Author: {book.author}</p>
                            </div>

                            <div className="hidden sm:block sm:shrink-0">
                                <img
                                    alt="book name"
                                    src="https://www.oreilly.com/api/v2/epubs/9780137314942/files/graphics/9780137314867.jpg"
                                    className="h-28 w-24 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                {book.description}
                            </p>
                        </div>

                        <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Published Date</dt>
                                <dd className="text-xs text-gray-500">{book.publishedDate}</dd>
                            </div>

                            <div className="flex flex-col-reverse">
                                <dt className="text-sm font-medium text-gray-600">Book Status</dt>
                                <dd className="text-xs text-orange-800"> {book.available ? 'Available' : 'Borrowed'}</dd>
                            </div>

                            {book.available && (
                                <div>
                                    <button
                                        onClick={() => handleBorrow(book._id)}
                                        className="font-medium border bg-green-800/50 py-2 px-4 rounded hover:bg-blue-500 text-white"
                                    >
                                        Borrow
                                    </button>
                                </div>
                            )}


                        </dl>
                    </div>
                ))}

                {showDatePicker && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        style={{
                            zIndex: 1000,
                            WebkitTextFillColor: "white"
                        }}>
                        <div className="border p-4 rounded-lg shadow-lg text-black">
                            <div className='flex justify-between'>
                                <h2 className="text-lg font-bold mb-4">Select Due Date</h2>
                                <button
                                    onClick={() => setShowDatePicker(false)}
                                    className="bg-red-500 text-white px-4 py-1 rounded my-2"
                                >
                                    x
                                </button>
                            </div>
                            <DatePicker
                                selected={dueDate}
                                onChange={handleDateSelect}
                                inline
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookList;
