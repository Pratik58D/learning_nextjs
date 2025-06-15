import React from 'react'

import Luffy from "../../../public/luffy.jpg"
import Image from 'next/image'


const LayoutPractice = () => {
  return (
    <div>
      <Image src={Luffy} alt= "luffy is here" />
      <Image 
      src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt='yeha image xa'
      width={300}
      height={300}
      />
    </div>
  )
}

export default LayoutPractice