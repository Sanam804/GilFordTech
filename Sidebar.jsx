import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
        <div class="list-group">
  <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-user'></i><span className='float-end fw-bold'>User</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-user'></i><span className='float-end fw-bold'>Maincategory</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-user'></i><span className='float-end fw-bold'>Subcategory</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-ravelry'></i><span className='float-end fw-bold'>Brand</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className="fa fa-product-hunt"></i><span className='float-end fw-bold'>Products</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-envelope'></i><span className='float-end fw-bold'>Newletter</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-user'></i><span className='float-end fw-bold'>Contact Us</span> </Link>
    <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
    <i className='fa fa-user'></i><span className='float-end fw-bold'>Checkout</span> </Link>
</div>
    </>
  )
}
