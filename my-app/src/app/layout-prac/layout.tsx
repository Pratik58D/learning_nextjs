import React from 'react'

const BaseLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
        <nav className='text-center mt-3 text-cyan-500'>this is the navigation bar.</nav>



        {children}
        <footer className='text-center text-cyan-500 mt-96 '>this is footer</footer>
    </div>
  )
}

export default BaseLayout