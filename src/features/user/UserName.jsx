import React from 'react'
import { useSelector } from 'react-redux'
import { getUserName } from './userSlice'

const UserName = () => {
  const userName = useSelector(getUserName)

  if(!userName) return null
  
  return (
    <div className='ml-22 hidden md:block text-sm font-semibold'>
      {userName}
    </div>
  )
}

export default UserName
