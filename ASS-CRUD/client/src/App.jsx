import React, { useEffect, useRef, useState } from 'react'
import Input from './components/Input.jsx'
import Button from './components/Button.jsx'

//import userapi here...
import userApi from './services/userApi.js'
import Table from './components/Table.jsx'

export default function App() {
  //user state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    repassword: ''
  })

  const [alluser, setAllUser] = useState(null)
  
  //for handle userdata smoothliy
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setUser(pre => ({ ...pre, [name]: value }))
  }

  //this function for send user data to backend or server
  const sendUserData = (e) => {
    try {
      if ((user.name && user.city && user.email && user.password) && (user.password == user.repassword)) {
        userApi.signup('signup', user).then(response => {
          if (response) {
            alert(response.message)
            setUser({ name: "", city: "", password: "", repassword: "", email: "" })
          }
        })
      } else {
        alert("please check your password or fill all the field ")
      }
    } catch (e) {
      console.log(e)
    }
  }

  //this function for getallUser form database
  const getAllUsers = () => {
    userApi.allUsers('allusers').then(response => {
      if (response.status == "ok") {
        setAllUser(response.user);
      }
    })
  }

  return (
    <div className='flex flex-col items-center my-2 md:flex-row md:justify-evenly  md:items-start'>
      <div className='w-1/2 my-1 border p-5 bg-gradient-to-r from-blue-500 to-purple-700 '>
        <Input label="Name" name="name" type="text" onChange={onChangeHandle} value={user.name} />
        <Input label="Email" name="email" type="email" onChange={onChangeHandle} value={user.email} />
        <Input label="City" name="city" type="text" onChange={onChangeHandle} value={user.city} />
        <Input label="Password" name="password" type="password" onChange={onChangeHandle} value={user.password} />
        <Input label="Re-password" name="repassword" type="password" onChange={onChangeHandle} value={user.repassword} />
        <Button onClick={sendUserData}>{user.mainEmail?"Edit":"Submit"}</Button>
      </div>
      <div >
        <Button onClick={getAllUsers}>All USERS</Button>
        {alluser && <Table data={alluser} setUser={setUser} />}
      </div>
    </div>
  )
}