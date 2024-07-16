import React from 'react'
import Dashbord from './Dashbord'
import AddBookPage from './AddBookPage'

const AddBooks = () => {
    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:my-5 my-3">

                <div className="col-span-1 md:block hidden">
                    <Dashbord />
                </div>

                <div className="col-span-3">

                    <AddBookPage />
                </div>
            </div>
        </div>
    )
}

export default AddBooks
