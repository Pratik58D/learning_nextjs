import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href="/" className='text-blue-800 underline'>Home</Link>
      </div>
  )
}

export default NotFound