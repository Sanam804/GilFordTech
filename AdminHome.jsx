import React from 'react'
import Sidebar from './Sidebar'
export default function AdminHome() {
  return (
    <>
        <div className='container-fluid my-3'>
        <div className='row'>
            <div className='col-md-3'>
                <Sidebar/>
            </div>
                    <div className='col-md-9'>
            <div className='row'>
            <div className='col-md-6'>
                <img src='./img/about-1.jpg'  width="100%"/>
            </div>
           <div className='col-md-6'>
           <table className='table table-bordered table-striped'>
               <tbody>
                <tr>
                    <th>Name</th>
                    <td>Mr.X</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>Sanam@gmail.com</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>76767767878</td>
                </tr>
                <th colSpan={2} ><button className='update'>Update</button></th>
                
               </tbody>
               </table>
           </div>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}
