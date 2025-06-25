"use client"


import React from 'react'

import { multiply , divide } from '@/utils/clientonly-utils'

const ClientComponent = () => {

    const mul = multiply(4,5);
    const div = divide(10,3);

  

  return (
    <div>
        the multiple  is : {mul}
    <h1>the divide is : {div}</h1>
    </div>
  )
}

export default ClientComponent
