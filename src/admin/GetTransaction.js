import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getTransactions} from "../action/TransacationAction"



const GetTransaction = () => {
    const dispatch = useDispatch()

    const { transactions } = useSelector((state) => state.transactions);

    // console.log(transactions);

    useEffect(() => {
        dispatch(getTransactions())
    },[dispatch])

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className='text-white flex text-2xl my-5'>All Transaction's List ...</h1>

                <table class="w-5/6 text-sm text-left mx-5 rtl:text-right text-gray-500 dark:text-gray-400" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 border dark:text-gray-400">
                        <tr>
                            {/* <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th> */}
                            <th scope="col" class="px-6 py-3">
                                Book ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Borrowed By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Due Date
                            </th>
                        </tr>
                    </thead>
                    {transactions && transactions.map(transaction => (
                        <tbody key={transactions._id}>

                            <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {/* <td class="w-4 p-4 ">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td> */}
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src="https://i.pinimg.com/474x/dc/14/b7/dc14b76d8f103a7b3aeeb39c98d90998.jpg" />
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">{transaction._id}</div>
                                        {/* <div class="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    {transaction.username}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2">
                                        </div> {transaction.available ? 'Available' : 'Borrowed'}
                                    </div>
                                </td>
                                <td class="px-6 py-4">

                                    <span

                                        className="font-medium text-green-600 dark:green-red-700 hover:underline"
                                    >
                                        {transaction.dueDate}
                                    </span>

                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>


            </div>

        </div>
    )
}

export default GetTransaction
