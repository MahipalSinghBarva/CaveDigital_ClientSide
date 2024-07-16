import React from 'react'

import Dashbord from './Dashbord';
import AddBooks from './AddBooks';
import Books from './Books';

const Admin = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid full flex-grow place-items-center">
    <Dashbord />
  </div>
  <div className="divider lg:divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
    <AddBooks/>
    <Books/>
  </div>
</div>
  )
}

export default Admin
