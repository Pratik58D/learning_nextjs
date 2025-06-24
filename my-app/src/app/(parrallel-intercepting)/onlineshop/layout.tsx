import React from 'react'

const EcommerceLayoout = ({children , product}: {
    children : React.ReactNode
    product : string
}) => {
  return (
    <div>
        {children}
        {product}
    </div>
  )
}

export default EcommerceLayoout