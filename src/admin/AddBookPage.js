import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { addBook } from '../action/BookAction';
import { CLEAR_ERRORS } from '../constants/BookConstatns';


const AddBookPage = () => {
    const dispatch = useDispatch();
    const alert = useAlert();


    const { error } = useSelector((state) => state.books);

    const [bookData, setBookData] = useState({
        title: "", author: "", publishedDate: "", image: "", description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook(bookData));
        alert.success("Book added successfully");
    };


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(CLEAR_ERRORS());
        }
        //  dispatch(getBooks())
    }, [dispatch, alert, error]);
    return (
        <div>
            <h1 className='text-white text-2xl my-5'>Add More Book's Here...</h1>
            <form onSubmit={handleSubmit}>

                <div className="max-w-2xl gap-3  grid grid-cols-2">

                    <input type="text" id="title" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" name="title" onChange={handleChange} value={bookData.title} />

                    <input type="text" id="author" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Author" name="author" onChange={handleChange} value={bookData.author} />

                    <input type="date" id="publishedDate" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Publish Date" name="publishedDate" onChange={handleChange} value={bookData.publishedDate} />

                    <input type="text" id="description" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Description" name="description" onChange={handleChange} value={bookData.description} />
                    <input class="block  w-80 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " id="file_input" type="file" name="image" onChange={handleChange} value={bookData.image} />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-40 lg:ml-32 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 my-5 ">Add Book's</button>
            </form>

        </div>
    )
}

export default AddBookPage
