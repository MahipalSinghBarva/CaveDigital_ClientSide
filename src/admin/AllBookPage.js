import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBooks } from '../action/BookAction';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';

const AllBookPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const alert = useAlert();


    const { error, books } = useSelector((state) => state.books);
    

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    const deleteBookHandler = (bookId) => {
        dispatch(deleteBook(bookId));
        alert.success("Book Deleted Successfully")
    };
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className='text-white flex text-2xl my-5'>All Book's List</h1>

                <table class="w-5/6 text-sm text-left mx-5 rtl:text-right text-gray-500 dark:text-gray-400" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 border dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Borrowed By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {books && books.map(book => (
                        <tbody key={book._id}>

                            <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4 ">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src="https://i.pinimg.com/474x/dc/14/b7/dc14b76d8f103a7b3aeeb39c98d90998.jpg" />
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">{book.title}</div>
                                        {/* <div class="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    {book.author}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2">
                                        </div> {book.available ? 'Available' : 'Borrowed'}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    {book.available && (
                                        <button
                                            onClick={() => deleteBookHandler(book._id)}
                                            className="font-medium text-red-600 dark:text-red-700 hover:underline"
                                        >
                                            Delete Book
                                        </button>
                                    )}
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>


            </div>

        </div>
    )
}

export default AllBookPage
