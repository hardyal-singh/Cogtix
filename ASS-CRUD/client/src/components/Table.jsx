import React, { useState } from 'react'
import Button from './Button'
import userApi from '../services/userApi.js'

export default function Table({data, setUser}) {

  const deleteUser=(id)=>{
    userApi.deleteUser('deleteuser',id).then(response=>{
      if(response.status=="ok"){
        alert("User delete successfully")
      }
    })
  }

  

  return (
   <table className='w-full bg-gradient-to-r from-blue-500 to-purple-700 text-white'>
    <thead className='border border-red-500' >
     <tr className='border border-red-500'>
        <th  className='border border-red-500 p-2'>Name</th>
        <th  className='border border-red-500 p-2'>Email</th>
        <th  className='border border-red-500 p-2'>City</th>
     </tr>
    </thead>
    <tbody>
     {
        data.map(item=>(
            <tr key={item.id} className='border border-red-500'>
              <td  className='border border-red-500 p-2'>{item.name}</td>
              <td  className='border border-red-500 p-2'>{item.email}</td>
              <td  className='border border-red-500 p-2'>{item.city}</td>
              <td  className='border border-red-500 p-2'><Button onClick={()=>setUser({name:item.name, email:item.email, city:item.city, password:item.password, mainEmail:item.email})} >Edit</Button></td>
              <td className='border border-red-500 p-2'><Button onClick={()=>deleteUser(item.email)}>Delete</Button></td>

            </tr>
        ))
     }
    </tbody>
   </table>
  )
}
