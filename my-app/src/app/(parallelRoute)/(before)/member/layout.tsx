import React from 'react'
import Comments from '@/components/Beforeparallel/Comments'
import Member from '@/components/Beforeparallel/Member'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1>{children}</h1>
        <div className='flex'>
            <Member />
            <Comments />
        </div>
        
        </div>
  )
}

export default Layout